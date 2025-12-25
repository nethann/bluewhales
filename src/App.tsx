import { useState } from 'react';
import Modal from './components/Modal';
import RoomServiceModal from './components/RoomServiceModal';
import SuccessModal from './components/SuccessModal';
import { translations, languageNames, type Language } from './translations';
import { sendFeedback } from './utils/googleSheets';
import './App.css';

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [feedback, setFeedback] = useState('');
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const t = translations[language];

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.trim()) {
      // Send to Google Sheets
      await sendFeedback({
        feedback: feedback,
        language: language,
      });

      // Show success message
      setSuccessMessage(t.feedbackSuccess);
      setIsSuccessOpen(true);

      setFeedback('');
    }
  };

  return (
    <div className="app">
      <main className="main">
        <h1 className="welcome-title">{t.welcome}</h1>

        <div className="language-selector">
          <label htmlFor="language">{t.selectLanguage}:</label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value as Language)}
          >
            {Object.entries(languageNames).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <section className="services-section">
          <h2 className="section-title">{t.servicesTitle}</h2>

          <div className="services-grid">
            <button
              className="service-button restaurant"
              onClick={() => setActiveModal('restaurant')}
            >
              <span className="service-icon">🍽️</span>
              <span className="service-name">{t.restaurant}</span>
            </button>

            <button
              className="service-button tours"
              onClick={() => setActiveModal('tours')}
            >
              <span className="service-icon">🗺️</span>
              <span className="service-name">{t.tours}</span>
            </button>

            <button
              className="service-button laundry"
              onClick={() => setActiveModal('laundry')}
            >
              <span className="service-icon">👔</span>
              <span className="service-name">{t.laundry}</span>
            </button>

            <button
              className="service-button room-service"
              onClick={() => setActiveModal('roomService')}
            >
              <span className="service-icon">🛎️</span>
              <span className="service-name">{t.roomService}</span>
            </button>
          </div>
        </section>

        <section className="feedback-section">
          <h2 className="feedback-title">{t.feedbackTitle}</h2>
          <form onSubmit={handleFeedbackSubmit} className="feedback-form">
            <textarea
              className="feedback-textarea"
              placeholder={t.feedbackPlaceholder}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={4}
            />
            <button type="submit" className="feedback-submit">
              {t.sendButton}
            </button>
          </form>
        </section>
      </main>

      {/* Restaurant Modal */}
      <Modal
        isOpen={activeModal === 'restaurant'}
        onClose={() => setActiveModal(null)}
        title={t.restaurantTitle}
      >
        <div className="modal-content-inner">
          <div className="menu-images">
            <img src="/menu/photo0jpg.jpg" alt="Menu" className="menu-image" />
          </div>
        </div>
      </Modal>

      {/* Tours Modal */}
      <Modal
        isOpen={activeModal === 'tours'}
        onClose={() => setActiveModal(null)}
        title={t.toursTitle}
      >
        <div className="modal-content-inner">
          <div className="menu-images">
            <img src="/tours/LSL_B2_Hikkaduwa-Beach_800x520.jpg" alt="Tour" className="menu-image" />
          </div>
        </div>
      </Modal>

      {/* Laundry Modal */}
      <Modal
        isOpen={activeModal === 'laundry'}
        onClose={() => setActiveModal(null)}
        title={t.laundryTitle}
      >
        <div className="modal-content-inner">
          <p className="laundry-message">{t.laundryMessage}</p>
        </div>
      </Modal>

      {/* Room Service Modal */}
      <RoomServiceModal
        isOpen={activeModal === 'roomService'}
        onClose={() => setActiveModal(null)}
        t={t}
        language={language}
      />

      {/* Success Modal */}
      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        message={successMessage}
      />
    </div>
  );
}

export default App;
