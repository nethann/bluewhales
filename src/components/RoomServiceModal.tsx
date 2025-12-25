import { useState } from 'react';
import Modal from './Modal';
import SuccessModal from './SuccessModal';
import { Translations, Language } from '../translations';
import { sendRoomServiceRequest } from '../utils/googleSheets';
import './RoomServiceModal.css';

interface RoomServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translations;
  language: Language;
}

export default function RoomServiceModal({ isOpen, onClose, t, language }: RoomServiceModalProps) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [services, setServices] = useState({
    cleanToilet: false,
    makeBed: false,
    vacuumFloor: false,
    cleanBathroom: false,
    changeTowels: false,
    emptyTrash: false,
  });
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleServiceToggle = (service: keyof typeof services) => {
    setServices((prev) => ({
      ...prev,
      [service]: !prev[service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const selectedServices = Object.entries(services)
      .filter(([_, isSelected]) => isSelected)
      .map(([service]) => service);

    // Send to Google Sheets
    const success = await sendRoomServiceRequest({
      date: selectedDate,
      time: selectedTime,
      services: selectedServices,
      language: language,
    });

    // Show success message
    setSuccessMessage(t.roomServiceSuccess);
    setIsSuccessOpen(true);

    // Reset form
    setSelectedDate('');
    setSelectedTime('');
    setServices({
      cleanToilet: false,
      makeBed: false,
      vacuumFloor: false,
      cleanBathroom: false,
      changeTowels: false,
      emptyTrash: false,
    });

    onClose();
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} title={t.roomServiceTitle}>
        <form onSubmit={handleSubmit} className="room-service-form">
          <div className="form-group">
            <label htmlFor="service-date">{t.selectDate}:</label>
            <input
              type="date"
              id="service-date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={today}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="service-time">{t.selectTime}:</label>
            <input
              type="time"
              id="service-time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>{t.selectServices}</label>
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={services.cleanToilet}
                  onChange={() => handleServiceToggle('cleanToilet')}
                />
                <span>{t.cleanToilet}</span>
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={services.makeBed}
                  onChange={() => handleServiceToggle('makeBed')}
                />
                <span>{t.makeBed}</span>
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={services.vacuumFloor}
                  onChange={() => handleServiceToggle('vacuumFloor')}
                />
                <span>{t.vacuumFloor}</span>
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={services.cleanBathroom}
                  onChange={() => handleServiceToggle('cleanBathroom')}
                />
                <span>{t.cleanBathroom}</span>
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={services.changeTowels}
                  onChange={() => handleServiceToggle('changeTowels')}
                />
                <span>{t.changeTowels}</span>
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={services.emptyTrash}
                  onChange={() => handleServiceToggle('emptyTrash')}
                />
                <span>{t.emptyTrash}</span>
              </label>
            </div>
          </div>

          <button type="submit" className="submit-button">
            {t.submitRequest}
          </button>
        </form>
      </Modal>

      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        message={successMessage}
      />
    </>
  );
}
