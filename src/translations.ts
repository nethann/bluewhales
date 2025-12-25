export type Language = 'en' | 'ru' | 'de' | 'au' | 'he';

export interface Translations {
  selectLanguage: string;
  welcome: string;
  servicesTitle: string;
  restaurant: string;
  tours: string;
  laundry: string;
  roomService: string;
  feedbackTitle: string;
  feedbackPlaceholder: string;
  sendButton: string;
  closeButton: string;

  // Laundry modal
  laundryTitle: string;
  laundryMessage: string;

  // Room service modal
  roomServiceTitle: string;
  selectDate: string;
  selectTime: string;
  selectServices: string;
  cleanToilet: string;
  makeBed: string;
  vacuumFloor: string;
  cleanBathroom: string;
  changeTowels: string;
  emptyTrash: string;
  submitRequest: string;

  // Restaurant modal
  restaurantTitle: string;
  menuTitle: string;

  // Tours modal
  toursTitle: string;
  toursInfo: string;

  // Success messages
  roomServiceSuccess: string;
  feedbackSuccess: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    selectLanguage: 'Select Language',
    welcome: 'Welcome to Blue Whales Hotel',
    servicesTitle: 'Services We Offer',
    restaurant: 'Restaurant',
    tours: 'Tours',
    laundry: 'Laundry',
    roomService: 'Room Service',
    feedbackTitle: 'To serve you better, please let us know how we can improve our services',
    feedbackPlaceholder: 'Share your feedback here...',
    sendButton: 'Send',
    closeButton: 'Close',

    laundryTitle: 'Laundry Service',
    laundryMessage: 'Please bring your laundry items to the front desk. Our professional laundry service is available 24 hours a day, 7 days a week. Your items will be cleaned, pressed, and returned to your room within 24 hours.',

    roomServiceTitle: 'Room Service Request',
    selectDate: 'Select Date',
    selectTime: 'Select Time',
    selectServices: 'Select Services Needed:',
    cleanToilet: 'Clean Toilet',
    makeBed: 'Make Bed',
    vacuumFloor: 'Vacuum Floor',
    cleanBathroom: 'Clean Bathroom',
    changeTowels: 'Change Towels',
    emptyTrash: 'Empty Trash',
    submitRequest: 'Submit Request',

    restaurantTitle: 'Restaurant Menu',
    menuTitle: 'Our Menu',

    toursTitle: 'Available Tours',
    toursInfo: 'Tour Information',

    roomServiceSuccess: 'Room service request submitted successfully!',
    feedbackSuccess: 'Thank you for your feedback!',
  },

  ru: {
    selectLanguage: 'Выберите язык',
    welcome: 'Добро пожаловать в отель Blue Whales',
    servicesTitle: 'Предлагаемые услуги',
    restaurant: 'Ресторан',
    tours: 'Туры',
    laundry: 'Прачечная',
    roomService: 'Обслуживание номеров',
    feedbackTitle: 'Чтобы лучше обслуживать вас, пожалуйста, сообщите нам, как мы можем улучшить наши услуги',
    feedbackPlaceholder: 'Поделитесь своим отзывом здесь...',
    sendButton: 'Отправить',
    closeButton: 'Закрыть',

    laundryTitle: 'Услуги прачечной',
    laundryMessage: 'Пожалуйста, принесите белье на стойку регистрации. Наша профессиональная служба прачечной работает 24 часа в сутки, 7 дней в неделю. Ваши вещи будут очищены, отглажены и возвращены в номер в течение 24 часов.',

    roomServiceTitle: 'Запрос на обслуживание номера',
    selectDate: 'Выберите дату',
    selectTime: 'Выберите время',
    selectServices: 'Выберите необходимые услуги:',
    cleanToilet: 'Убрать туалет',
    makeBed: 'Застелить постель',
    vacuumFloor: 'Пропылесосить пол',
    cleanBathroom: 'Убрать ванную',
    changeTowels: 'Сменить полотенца',
    emptyTrash: 'Вынести мусор',
    submitRequest: 'Отправить запрос',

    restaurantTitle: 'Меню ресторана',
    menuTitle: 'Наше меню',

    toursTitle: 'Доступные туры',
    toursInfo: 'Информация о турах',

    roomServiceSuccess: 'Запрос на обслуживание номера успешно отправлен!',
    feedbackSuccess: 'Спасибо за ваш отзыв!',
  },

  de: {
    selectLanguage: 'Sprache wählen',
    welcome: 'Willkommen im Blue Whales Hotel',
    servicesTitle: 'Unsere Dienstleistungen',
    restaurant: 'Restaurant',
    tours: 'Touren',
    laundry: 'Wäscherei',
    roomService: 'Zimmerservice',
    feedbackTitle: 'Um Sie besser bedienen zu können, teilen Sie uns bitte mit, wie wir unsere Dienstleistungen verbessern können',
    feedbackPlaceholder: 'Teilen Sie uns Ihr Feedback mit...',
    sendButton: 'Senden',
    closeButton: 'Schließen',

    laundryTitle: 'Wäscheservice',
    laundryMessage: 'Bitte bringen Sie Ihre Wäsche zur Rezeption. Unser professioneller Wäscheservice ist 24 Stunden am Tag, 7 Tage die Woche verfügbar. Ihre Artikel werden gereinigt, gebügelt und innerhalb von 24 Stunden in Ihr Zimmer zurückgebracht.',

    roomServiceTitle: 'Zimmerservice-Anfrage',
    selectDate: 'Datum wählen',
    selectTime: 'Zeit wählen',
    selectServices: 'Benötigte Dienstleistungen auswählen:',
    cleanToilet: 'Toilette reinigen',
    makeBed: 'Bett machen',
    vacuumFloor: 'Boden saugen',
    cleanBathroom: 'Badezimmer reinigen',
    changeTowels: 'Handtücher wechseln',
    emptyTrash: 'Müll leeren',
    submitRequest: 'Anfrage senden',

    restaurantTitle: 'Restaurant-Menü',
    menuTitle: 'Unsere Speisekarte',

    toursTitle: 'Verfügbare Touren',
    toursInfo: 'Tour-Informationen',

    roomServiceSuccess: 'Zimmerservice-Anfrage erfolgreich gesendet!',
    feedbackSuccess: 'Vielen Dank für Ihr Feedback!',
  },

  au: {
    selectLanguage: 'Select Language',
    welcome: 'Welcome to Blue Whales Hotel',
    servicesTitle: 'Services We Offer',
    restaurant: 'Restaurant',
    tours: 'Tours',
    laundry: 'Laundry',
    roomService: 'Room Service',
    feedbackTitle: 'To serve you better, please let us know how we can improve our services',
    feedbackPlaceholder: 'Share your feedback here...',
    sendButton: 'Send',
    closeButton: 'Close',

    laundryTitle: 'Laundry Service',
    laundryMessage: 'Please bring your laundry items to the front desk. Our professional laundry service is available 24 hours a day, 7 days a week. Your items will be cleaned, pressed, and returned to your room within 24 hours.',

    roomServiceTitle: 'Room Service Request',
    selectDate: 'Select Date',
    selectTime: 'Select Time',
    selectServices: 'Select Services Needed:',
    cleanToilet: 'Clean Toilet',
    makeBed: 'Make Bed',
    vacuumFloor: 'Vacuum Floor',
    cleanBathroom: 'Clean Bathroom',
    changeTowels: 'Change Towels',
    emptyTrash: 'Empty Trash',
    submitRequest: 'Submit Request',

    restaurantTitle: 'Restaurant Menu',
    menuTitle: 'Our Menu',

    toursTitle: 'Available Tours',
    toursInfo: 'Tour Information',

    roomServiceSuccess: 'Room service request submitted successfully!',
    feedbackSuccess: 'Thank you for your feedback!',
  },

  he: {
    selectLanguage: 'בחר שפה',
    welcome: 'ברוכים הבאים למלון Blue Whales',
    servicesTitle: 'השירותים שאנו מציעים',
    restaurant: 'מסעדה',
    tours: 'טיולים',
    laundry: 'כביסה',
    roomService: 'שירות חדרים',
    feedbackTitle: 'כדי לשרת אתכם טוב יותר, אנא הודיעו לנו כיצד נוכל לשפר את השירותים שלנו',
    feedbackPlaceholder: 'שתפו את המשוב שלכם כאן...',
    sendButton: 'שלח',
    closeButton: 'סגור',

    laundryTitle: 'שירות כביסה',
    laundryMessage: 'אנא הביאו את פריטי הכביסה שלכם לדלפק הקבלה. שירות הכביסה המקצועי שלנו זמין 24 שעות ביום, 7 ימים בשבוע. הפריטים שלכם ינוקו, יגהצו ויוחזרו לחדר שלכם תוך 24 שעות.',

    roomServiceTitle: 'בקשת שירות חדרים',
    selectDate: 'בחר תאריך',
    selectTime: 'בחר שעה',
    selectServices: 'בחר שירותים נדרשים:',
    cleanToilet: 'ניקוי אסלה',
    makeBed: 'סידור מיטה',
    vacuumFloor: 'שאיבת רצפה',
    cleanBathroom: 'ניקוי חדר אמבטיה',
    changeTowels: 'החלפת מגבות',
    emptyTrash: 'ריקון אשפה',
    submitRequest: 'שלח בקשה',

    restaurantTitle: 'תפריט מסעדה',
    menuTitle: 'התפריט שלנו',

    toursTitle: 'טיולים זמינים',
    toursInfo: 'מידע על טיולים',

    roomServiceSuccess: 'בקשת שירות חדרים נשלחה בהצלחה!',
    feedbackSuccess: 'תודה על המשוב שלכם!',
  },
};

export const languageNames: Record<Language, string> = {
  en: 'English',
  ru: 'Русский',
  de: 'Deutsch',
  au: 'English (AU)',
  he: 'עברית',
};
