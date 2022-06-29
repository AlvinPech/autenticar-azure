const appSettings = {
    appCredentials: {
        clientId: "7d1a0e89-d622-463a-84e8-c88d1d1ebc3d",
        tenantId: "2b83ac9e-2448-45df-9319-48d86236a5ea",
        clientSecret: "_5X8Q~s-yZyCOWW2eA~c8FEqCCgbUHCx6IG9ibM9"
    },
    authRoutes: {
        redirect: "http://localhost:4000/redirect",
        error: "/error", // the wrapper will redirect to this route in case of any error.
        unauthorized: "/unauthorized" // the wrapper will redirect to this route in case of unauthorized access attempt.
    }
}

module.exports = appSettings;