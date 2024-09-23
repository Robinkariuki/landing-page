import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useAuth } from '@/utils/context/AuthContext';
import CryptoJS from "crypto-js";
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
// import { getBaseUrl } from '@/utils/baseUrl';

function AccountSettingsModal({ isOpen, onClose,secretKey,token,baseUrl }) {
  const { user } = useAuth(); // Destructure user from useAuth

  // State to track form fields
  const [firstName, setFirstName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

//   const baseUrl = getBaseUrl();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const decryptedToken = CryptoJS.AES.decrypt(token, secretKey).toString(CryptoJS.enc.Utf8);

    // Perform validation here if needed

    try {
      const response = await fetch(`${baseUrl}/api/user/update`, {
        method: 'POST',
        headers: {
         Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${decryptedToken}`, // assuming you use token from useAuth
        },
        body: JSON.stringify({
          name: firstName,
          email,
          password,
          password_confirmation:confirmPassword,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Show success toast message
        toast.success('Account updated successfully!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        onClose(); // Close modal on success
      } else {
        // Show error toast message from server response
        toast.error(result.error || 'Failed to update account!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error('Error updating account:', error);
      // Show generic error toast message
      toast.error('An error occurred. Please try again.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };


  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0"
          enterTo="opacity-100 translate-y-0 sm:translate-y-0"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:translate-y-0"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative bg-white w-[700px] h-[600px] rounded-lg shadow-xl transform p-6">
                <div className="flex flex-col items-center">
                  {/* Centered header */}
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Account Settings</h3>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="mt-6 w-full flex flex-col items-center space-y-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        First Name & Last Name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="mt-1 block h-[52px] w-[375px] border bg-[#F6F7FB] border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block h-[52px] w-[375px] border bg-[#F6F7FB] border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block h-[52px] w-[375px] border bg-[#F6F7FB] border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="confirm-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="mt-1 block h-[52px] w-[375px] border bg-[#F6F7FB] border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    {/* Update button below form */}
                    <button
                      type="submit"
                      className="mt-6 text-white bg-[#EB1260] px-4 py-2 rounded-md hover:bg-pink-700"
                    >
                      Update
                    </button>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default AccountSettingsModal;
