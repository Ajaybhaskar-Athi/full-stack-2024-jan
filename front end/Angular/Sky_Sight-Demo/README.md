# Weather Application 🌤️

A simple weather application built with **Angular**, utilizing the **OpenWeatherMap API** to fetch real-time weather data. The app includes multiple pages for displaying current weather, detailed weather information, and general information about the application.

## Features ✨
- **Search Functionality**: Users can search for weather details by entering a location.
- **Real-Time Weather Data**: Fetches and displays temperature, humidity, wind speed, and more.
- **Multi-Page UI**: Includes a **Main Page**, **Weather Details Page**, **About Us Page**, and **Contact Us Page**.
- **Responsive UI**: Designed with **ShadCN** and **Tailwind CSS** for a modern and user-friendly experience.

## Technologies Used 🛠️
- **Angular**
- **OpenWeatherMap API**
- **ShadCN** (for UI components)
- **Tailwind CSS**
- **TypeScript**

## Installation & Setup ⚙️

1. Clone the repository:
   ```sh
   git clone https://github.com/Ajaybhaskar-Athi/Weather-App.git
   cd Weather-App
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/) and add it to your environment settings.
4. Start the development server:
   ```sh
   ng serve
   ```
5. Open your browser and go to `http://localhost:4200/`

## API Integration 🌎
This application fetches weather data using the OpenWeatherMap API. The displayed information includes:
- **Temperature** (Current, Min, Max)
- **Humidity**
- **Wind Speed**

## Project Structure 📂
```
Weather-App/
│-- src/
│   ├── app/
│   │   ├── components/       # Reusable components
│   │   ├── pages/            # Application pages
│   │   ├── services/         # API handling
│   │   ├── app.module.ts     # Main module
│   │   ├── app.component.ts  # Root component
│-- assets/
│-- angular.json
│-- package.json
│-- README.md
```

## Contributing 🤝
Contributions are welcome! Feel free to fork the repository and submit a pull request with improvements.


---
🚀 Built with ❤️ by **Ajay Bhaskar**
