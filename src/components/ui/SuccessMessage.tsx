import { memo } from 'react';

/* --------------------------------------------
 * Centralized Static Data & Icons
 * ------------------------------------------ */
const SUCCESS_MESSAGE_CONFIG = {
  icons: {
    centered: (
      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
        <svg
          className="w-8 h-8 text-green-600 dark:text-green-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
          />
        </svg>
      </div>
    ),
    default: (
      <svg
        className="w-5 h-5 text-green-500 dark:text-green-400 mr-3 flex-shrink-0 mt-0.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  classes: {
    centeredContainer: 'text-center space-y-4 animate-fadeIn',
    defaultContainer:
      'mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg animate-fadeIn',
    defaultTextTitle: 'text-sm font-medium text-green-800 dark:text-green-200',
    defaultTextMessage: 'text-sm text-green-700 dark:text-green-300 mt-1',
    defaultButton:
      'text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors mt-2 underline',
    centeredTitle: 'text-xl font-semibold text-gray-900 dark:text-white',
    centeredMessage: 'text-gray-600 dark:text-gray-400',
    centeredActionText:
      'font-medium text-[#6fb43f] hover:text-[#5a9935] transition-colors',
    centeredActionDescription: 'text-sm text-gray-500 dark:text-gray-400',
  },
};

/* --------------------------------------------
 * Types
 * ------------------------------------------ */
interface SuccessMessageProps {
  title: string;
  message: string;
  show: boolean;
  variant?: 'default' | 'centered';
  onActionClick?: () => void;
  actionText?: string;
  actionDescription?: string;
}

/* --------------------------------------------
 * Component
 * ------------------------------------------ */
const SuccessMessage = memo(
  ({
    title,
    message,
    show,
    variant = 'default',
    onActionClick,
    actionText,
    actionDescription,
  }: SuccessMessageProps) => {
    if (!show) return null;

    /* -------- Centered Variant -------- */
    if (variant === 'centered') {
      return (
        <div className={SUCCESS_MESSAGE_CONFIG.classes.centeredContainer}>
          {SUCCESS_MESSAGE_CONFIG.icons.centered}
          <h3 className={SUCCESS_MESSAGE_CONFIG.classes.centeredTitle}>{title}</h3>
          <p className={SUCCESS_MESSAGE_CONFIG.classes.centeredMessage}>{message}</p>

          {actionText && onActionClick && (
            <p className={SUCCESS_MESSAGE_CONFIG.classes.centeredActionDescription}>
              {actionDescription && (
                <>
                  {actionDescription}{' '}
                </>
              )}
              <button
                onClick={onActionClick}
                className={SUCCESS_MESSAGE_CONFIG.classes.centeredActionText}
                type="button"
              >
                {actionText}
              </button>
            </p>
          )}
        </div>
      );
    }

    /* -------- Default Variant -------- */
    return (
      <div
        className={SUCCESS_MESSAGE_CONFIG.classes.defaultContainer}
        role="status"
        aria-live="polite"
      >
        <div className="flex items-start">
          {SUCCESS_MESSAGE_CONFIG.icons.default}
          <div className="flex-1">
            <h3 className={SUCCESS_MESSAGE_CONFIG.classes.defaultTextTitle}>
              {title}
            </h3>
            <p className={SUCCESS_MESSAGE_CONFIG.classes.defaultTextMessage}>
              {message}
            </p>

            {actionText && onActionClick && (
              <button
                onClick={onActionClick}
                className={SUCCESS_MESSAGE_CONFIG.classes.defaultButton}
                type="button"
              >
                {actionText}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
);

SuccessMessage.displayName = 'SuccessMessage';

export default SuccessMessage;
