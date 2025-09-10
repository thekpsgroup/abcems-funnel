"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import {
  PaperAirplaneIcon,
  UsersIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationCircleIcon
} from "@heroicons/react/24/outline";

interface Message {
  id: string;
  subject: string;
  content: string;
  recipientType: 'all' | 'learners' | 'instructors' | 'admins';
  status: 'draft' | 'sent' | 'scheduled';
  scheduledFor?: string;
  sentAt?: string;
  recipientCount: number;
  createdAt: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: 'LEARNER' | 'INSTRUCTOR' | 'ADMIN';
}

export default function BulkMessagingPage() {
  const { data: session, status } = useSession();
  const [messages, setMessages] = useState<Message[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showComposeForm, setShowComposeForm] = useState(false);
  const [formData, setFormData] = useState({
    subject: '',
    content: '',
    recipientType: 'all' as 'all' | 'learners' | 'instructors' | 'admins',
    scheduledFor: '',
    sendNow: true
  });

  useEffect(() => {
    if (status === 'loading') return;
    if (!session || (session as { user?: { role?: string } }).user?.role !== 'ADMIN') {
      redirect('/auth/signin');
    }
    fetchData();
  }, [session, status]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      // Fetch messages and users
      const [messagesRes, usersRes] = await Promise.all([
        fetch('/api/admin/messages'),
        fetch('/api/admin/users')
      ]);

      if (messagesRes.ok) {
        const messagesData = await messagesRes.json();
        setMessages(messagesData);
      }

      if (usersRes.ok) {
        const usersData = await usersRes.json();
        setUsers(usersData.users || usersData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/admin/send-bulk-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowComposeForm(false);
        setFormData({
          subject: '',
          content: '',
          recipientType: 'all',
          scheduledFor: '',
          sendNow: true
        });
        fetchData(); // Refresh the messages list
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message');
    }
  };

  const getRecipientCount = (type: string) => {
    switch (type) {
      case 'all':
        return users.length;
      case 'learners':
        return users.filter(u => u.role === 'LEARNER').length;
      case 'instructors':
        return users.filter(u => u.role === 'INSTRUCTOR').length;
      case 'admins':
        return users.filter(u => u.role === 'ADMIN').length;
      default:
        return 0;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'sent':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircleIcon className="w-3 h-3 mr-1" />
            Sent
          </span>
        );
      case 'scheduled':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <ClockIcon className="w-3 h-3 mr-1" />
            Scheduled
          </span>
        );
      case 'draft':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            <ExclamationCircleIcon className="w-3 h-3 mr-1" />
            Draft
          </span>
        );
      default:
        return null;
    }
  };

  if (status === 'loading' || isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B0000] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading bulk messaging...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Compose Message */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Compose Message</h2>
                <button
                  onClick={() => setShowComposeForm(!showComposeForm)}
                  className="text-[#8B0000] hover:text-[#A52A2A] text-sm font-medium"
                >
                  {showComposeForm ? 'Cancel' : 'New Message'}
                </button>
              </div>

              {showComposeForm ? (
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                      placeholder="Enter message subject"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Recipients
                    </label>
                    <select
                      value={formData.recipientType}
                      onChange={(e) => setFormData({...formData, recipientType: e.target.value as 'all' | 'learners' | 'instructors' | 'admins'})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                    >
                      <option value="all">All Users ({getRecipientCount('all')})</option>
                      <option value="learners">Students ({getRecipientCount('learners')})</option>
                      <option value="instructors">Instructors ({getRecipientCount('instructors')})</option>
                      <option value="admins">Administrators ({getRecipientCount('admins')})</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.content}
                      onChange={(e) => setFormData({...formData, content: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                      placeholder="Enter your message..."
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="sendNow"
                      checked={formData.sendNow}
                      onChange={(e) => setFormData({...formData, sendNow: e.target.checked})}
                      className="h-4 w-4 text-[#8B0000] focus:ring-[#8B0000] border-gray-300 rounded"
                    />
                    <label htmlFor="sendNow" className="ml-2 block text-sm text-gray-700">
                      Send immediately
                    </label>
                  </div>

                  {!formData.sendNow && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Schedule For
                      </label>
                      <input
                        type="datetime-local"
                        value={formData.scheduledFor}
                        onChange={(e) => setFormData({...formData, scheduledFor: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-[#8B0000] text-white py-2 px-4 rounded-md hover:bg-[#A52A2A] transition-colors inline-flex items-center justify-center"
                  >
                    <PaperAirplaneIcon className="w-4 h-4 mr-2" />
                    {formData.sendNow ? 'Send Message' : 'Schedule Message'}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <PaperAirplaneIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 mb-4">Ready to send a message to your users?</p>
                  <button
                    onClick={() => setShowComposeForm(true)}
                    className="bg-[#8B0000] text-white px-4 py-2 rounded-md hover:bg-[#A52A2A] transition-colors"
                  >
                    Compose Message
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Message History */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Message History</h2>
                <p className="text-sm text-gray-600">View and manage your sent messages</p>
              </div>

              <div className="divide-y divide-gray-200">
                {messages.length === 0 ? (
                  <div className="px-6 py-12 text-center">
                    <UsersIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No messages sent yet</p>
                    <p className="text-sm text-gray-400">Your sent messages will appear here</p>
                  </div>
                ) : (
                  messages.map((message) => (
                    <div key={message.id} className="px-6 py-4 hover:bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-sm font-medium text-gray-900">{message.subject}</h3>
                            {getStatusBadge(message.status)}
                          </div>
                          <p className="text-sm text-gray-600 line-clamp-2">{message.content}</p>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                            <span>To: {message.recipientType} ({message.recipientCount} recipients)</span>
                            {message.sentAt && (
                              <span>Sent: {new Date(message.sentAt).toLocaleDateString()}</span>
                            )}
                            {message.scheduledFor && (
                              <span>Scheduled: {new Date(message.scheduledFor).toLocaleDateString()}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
