import React from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div class="flex-shrink-0">
          <img
            class="h-12 w-12"
            src="https://img-premium.flaticon.com/png/512/566/premium/566769.png?token=exp=1627417016~hmac=b4d2a0c673381e4fcce98a5c2c6975bc"
            alt="ChitChat Logo"
          />
        </div>
        <div>
          <div class="text-xl font-medium text-black">ChitChat</div>
          <p class="text-gray-500">You have a new message!</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
