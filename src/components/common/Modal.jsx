import React from 'react';

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  const isGalleryModal = data.image;
  const isExperiencesModal = data.period;
  const isAchievementModal = data.category && data.details && !data.overview;
  const isPersonalModal = data.content && !data.image && !data.period;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold">
            {data.title || data.name || 'Details'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Gallery Modal */}
          {isGalleryModal && (
            <div className="space-y-4">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold mb-2">{data.title}</h3>
                <p className="text-gray-600">{data.context || data.description}</p>
                {data.dateLocation && (
                  <p className="text-sm text-gray-500 mt-2">{data.dateLocation}</p>
                )}
              </div>
            </div>
          )}

          {/* Experiences Modal */}
          {isExperiencesModal && (
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{data.title}</h3>
                  <p className="text-gray-600">{data.period}</p>
                </div>
                {data.year && (
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {data.year}
                  </span>
                )}
              </div>
              <p className="text-gray-700">{data.details}</p>
              {data.technologies && (
                <div className="flex flex-wrap gap-2">
                  {data.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Achievement Modal */}
          {isAchievementModal && (
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{data.title}</h3>
                  <p className="text-gray-600">{data.issuer}</p>
                </div>
                {data.year && (
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {data.year}
                  </span>
                )}
              </div>
              <p className="text-gray-700">{data.details || data.description}</p>
              {data.category && (
                <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  {data.category}
                </span>
              )}
            </div>
          )}

          {/* Personal Modal */}
          {isPersonalModal && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">{data.title}</h3>
              <p className="text-gray-700 whitespace-pre-line">{data.content}</p>
            </div>
          )}

          {/* Fallback for unknown modal types */}
          {!isGalleryModal && !isExperiencesModal && !isAchievementModal && !isPersonalModal && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">{data.title || 'Details'}</h3>
              <p className="text-gray-700">{data.description || data.details || data.content}</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t">
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
