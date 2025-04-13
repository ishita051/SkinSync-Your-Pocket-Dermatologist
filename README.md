# SkinSync-Your-Pocket-Dermatologist

![SkinSync Logo](./frontend/assets/images/logo.png)

SkinSync is an innovative mobile application that democratizes skin and body care through AI-powered analysis, personalized recommendations, and community support.

## Features

- **AI Diagnosis Assistant**: Upload photos for instant analysis of common skin conditions
- **Personalized Care Plans**: Custom routines based on skin type, concerns, and budget
- **Home Remedy Database**: Scientifically-backed DIY solutions using household items
- **Symptom Tracker & Journal**: Track patterns related to treatments, diet, stress, and environment
- **Community Support**: Anonymous forums and success stories from peers
- **Environmental Impact Scanner**: Adjusts recommendations based on local weather and pollution data
- **GlowCoins Reward System**: Gamified engagement system rewarding consistency

## Tech Stack

### Frontend
- React Native
- Expo
- React Navigation
- Native Base UI Components

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose ODM

### AI/ML
- TensorFlow.js for skin analysis model
- Custom recommendation engine

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB
- Expo CLI

### Installation

#### Clone the repository

```bash
git clone https://github.com/yourusername/skinsync.git
cd skinsync
```

#### Setup Environment Variables

1. Create `.env` files in both frontend and backend directories based on the provided `.env.example` files

#### Backend Setup

```bash
cd backend
npm install
npm run seed # To populate database with initial data
npm run dev # Starts development server
```

#### Frontend Setup

```bash
cd frontend
npm install
npx expo start # Starts the Expo development server
```

## Project Structure

```
skinsync/
├── README.md
├── package.json
├── .gitignore
├── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── screens/
│   │   ├── navigation/
│   │   ├── constants/
│   │   ├── contexts/
│   │   ├── hooks/
│   │   └── utils/
│   ├── assets/
│   └── app.json
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   └── server.js
│
└── ai-models/
    ├── skin-analysis/
    └── recommendation-engine/
```

## API Documentation

The backend API documentation is available at `/api-docs` when the server is running.

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Dermatology research sources
- Open source skin condition datasets
- AI/ML community resources
