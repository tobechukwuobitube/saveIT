import React from "react";
import "../../assets/css/client.css";
import "../../assets/css/createAccount.css";
import { Link } from "react-router-dom";

function ClientForm() {
  return (
    <div id="client-container">
      <div className="client-actions">
        <div className="client-items user-detail">
          <h1>Welcome, </h1>
        </div>
        <div className="client-items account-actions">
          <Link to="/Client" id="btn-link">
            <button id="create-account" className="client-btn">
              Create Account
            </button>
          </Link>
          <Link to="/Profile" id="btn-link">
            <button id="view-profile" className="client-btn">
              Account Profile
            </button>
          </Link>
          <Link to="/History" id="btn-link">
            <button id="view-transactions" className="client-btn">
              Transaction History
            </button>
          </Link>
        </div>
      </div>
      <div className="client-details account-summary">
        <div
          id="create-account-form"
          className="client-items create-account-form"
        >
          <div className="client-item account-summary">
            <p>Create Account:</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientForm;
