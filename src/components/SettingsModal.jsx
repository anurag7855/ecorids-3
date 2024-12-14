import React from 'react';
import { BiX } from 'react-icons/bi';

const SettingsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const settings = [
    {
      category: 'General',
      options: [
        { label: 'Dark Mode', type: 'toggle', value: false },
        { label: 'Notifications', type: 'toggle', value: true },
        { label: 'Language', type: 'select', value: 'English', options: ['English', 'Spanish', 'French'] },
      ],
    },
    {
      category: 'Privacy',
      options: [
        { label: 'Show Online Status', type: 'toggle', value: true },
        { label: 'Share Usage Data', type: 'toggle', value: false },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-[500px] max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-medium">Settings</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <BiX className="text-2xl" />
          </button>
        </div>

        <div className="p-4 space-y-6">
          {settings.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-medium mb-3">{section.category}</h3>
              <div className="space-y-4">
                {section.options.map((option, optionIndex) => (
                  <div key={optionIndex} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{option.label}</span>
                    {option.type === 'toggle' ? (
                      <button
                        className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                          option.value ? 'bg-green-500' : 'bg-gray-200'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-200 ${
                            option.value ? 'translate-x-7' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    ) : option.type === 'select' ? (
                      <select className="text-sm border rounded-lg px-2 py-1 outline-none focus:border-green-500">
                        {option.options.map((opt, i) => (
                          <option key={i} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              console.log('Settings saved');
              onClose();
            }}
            className="px-4 py-2 text-sm text-white bg-green-500 hover:bg-green-600 rounded-lg"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
