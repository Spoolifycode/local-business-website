"use client";

import { useState } from 'react';
import { ThumbsUp, Flag, MessageCircle, Clock } from 'lucide-react';

interface Comment {
  id: number;
  author: {
    name: string;
    image: string;
    role?: string;
  };
  content: string;
  date: string;
  likes: number;
  isLiked?: boolean;
  replies?: Comment[];
}

interface CommentsProps {
  articleId: string;
  initialComments?: Comment[];
}

export default function Comments({ articleId, initialComments = [] }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState('');
  const [showReplyTo, setShowReplyTo] = useState<number | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [sort, setSort] = useState<'newest' | 'popular'>('newest');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now(),
      author: {
        name: 'Current User', // In real app, get from auth
        image: '/api/placeholder/40/40',
      },
      content: newComment,
      date: new Date().toISOString(),
      likes: 0,
      replies: [],
    };

    setComments(prev => [comment, ...prev]);
    setNewComment('');
  };

  const handleReply = (commentId: number) => {
    if (!replyContent.trim()) return;

    const reply: Comment = {
      id: Date.now(),
      author: {
        name: 'Current User', // In real app, get from auth
        image: '/api/placeholder/40/40',
      },
      content: replyContent,
      date: new Date().toISOString(),
      likes: 0,
    };

    setComments(prev => prev.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...(comment.replies || []), reply]
        };
      }
      return comment;
    }));

    setReplyContent('');
    setShowReplyTo(null);
  };

  const handleLike = (commentId: number) => {
    setComments(prev => prev.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
          isLiked: !comment.isLiked
        };
      }
      return comment;
    }));
  };

  const sortedComments = [...comments].sort((a, b) => {
    if (sort === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return b.likes - a.likes;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return 'just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Comments ({comments.length})
        </h2>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as 'newest' | 'popular')}
          className="px-4 py-2 border border-gray-200 rounded-lg"
        >
          <option value="newest">Newest</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmitComment} className="mb-8">
        <div className="bg-gray-50 rounded-lg p-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Share your thoughts..."
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows={3}
          />
          <div className="mt-2 flex justify-end">
            <button
              type="submit"
              disabled={!newComment.trim()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              Post Comment
            </button>
          </div>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {sortedComments.map(comment => (
          <div key={comment.id} className="bg-white rounded-lg">
            <div className="flex gap-4">
              <img
                src={comment.author.image}
                alt={comment.author.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-medium text-gray-900">
                        {comment.author.name}
                        {comment.author.role && (
                          <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                            {comment.author.role}
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {formatDate(comment.date)}
                      </div>
                    </div>
                    <button 
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      title="Report comment"
                    >
                      <Flag className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-gray-700">{comment.content}</p>
                  <div className="mt-3 flex items-center gap-4">
                    <button
                      onClick={() => handleLike(comment.id)}
                      className={`flex items-center gap-1 text-sm ${
                        comment.isLiked ? 'text-blue-600' : 'text-gray-500'
                      } hover:text-blue-600 transition-colors`}
                    >
                      <ThumbsUp className="h-4 w-4" />
                      {comment.likes}
                    </button>
                    <button
                      onClick={() => setShowReplyTo(showReplyTo === comment.id ? null : comment.id)}
                      className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Reply
                    </button>
                  </div>
                </div>

                {/* Reply Form */}
                {showReplyTo === comment.id && (
                  <div className="mt-4 pl-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <textarea
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        placeholder="Write a reply..."
                        className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        rows={2}
                      />
                      <div className="mt-2 flex justify-end gap-2">
                        <button
                          onClick={() => {
                            setShowReplyTo(null);
                            setReplyContent('');
                          }}
                          className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => handleReply(comment.id)}
                          disabled={!replyContent.trim()}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                        >
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Replies */}
                {comment.replies && comment.replies.length > 0 && (
                  <div className="mt-4 space-y-4 pl-6 border-l-2 border-gray-100">
                    {comment.replies.map(reply => (
                      <div key={reply.id} className="flex gap-4">
                        <img
                          src={reply.author.image}
                          alt={reply.author.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="bg-gray-50 rounded-lg p-3">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <div className="font-medium text-gray-900">
                                  {reply.author.name}
                                </div>
                                <div className="text-sm text-gray-500 flex items-center">
                                  <Clock className="h-4 w-4 mr-1" />
                                  {formatDate(reply.date)}
                                </div>
                              </div>
                            </div>
                            <p className="text-gray-700">{reply.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {comments.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No comments yet. Be the first to share your thoughts!
        </div>
      )}
    </div>
  );
}