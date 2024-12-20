import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, User, MessageCircle, Trash2 } from 'lucide-react';

interface Comment {
  id: string;
  text: string;
  author: string;
  date: string;
}

export default function BlogPost() {
  const { id } = useParams();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() && commentAuthor.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        text: newComment,
        author: commentAuthor,
        date: new Date().toLocaleDateString()
      };
      setComments([...comments, comment]);
      setNewComment('');
      setCommentAuthor('');
    }
  };

  const deleteComment = (commentId: string) => {
    setComments(comments.filter(comment => comment.id !== commentId));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <article className="bg-white rounded-lg shadow-md overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1606913084603-3e7702b01627?auto=format&fit=crop&q=80"
          alt="Blog post cover"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Annual Textile Exhibition Coming Soon</h1>
          
          <div className="flex items-center space-x-4 text-gray-600 mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>2024-03-15</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>Admin</span>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p>Join us for the biggest textile exhibition of the year featuring local artisans and their masterpieces. Experience the rich heritage of Elampillai's textile industry.</p>
            {/* Add more content as needed */}
          </div>
        </div>
      </article>

      {/* Comments Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comments</h2>
        
        {/* Comment Form */}
        <form onSubmit={handleCommentSubmit} className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="mb-4">
            <label htmlFor="author" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="author"
              value={commentAuthor}
              onChange={(e) => setCommentAuthor(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment</label>
            <textarea
              id="comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              rows={3}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
          >
            Post Comment
          </button>
        </form>

        {/* Comments List */}
        <div className="space-y-4">
          {comments.map(comment => (
            <div key={comment.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">{comment.author}</h3>
                  <p className="text-sm text-gray-600">{comment.date}</p>
                </div>
                <button
                  onClick={() => deleteComment(comment.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-gray-600">{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}