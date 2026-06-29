"use client";

import { useState, useEffect } from "react";
import PageTransition from "@/components/animations/PageTransition";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    platformName: "HireFlow AI",
    supportEmail: "support@hireflow.ai",
    maintenance: false,
    allowRegistration: true,
    emailNotification: true,
    darkMode: true,
  });

  useEffect(() => {
    const saved = localStorage.getItem("adminSettings");

    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function saveSettings() {
    localStorage.setItem(
      "adminSettings",
      JSON.stringify(settings)
    );

    alert("Settings Updated Successfully");
  }

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">
            Platform Settings
          </h1>

          <p className="text-gray-400 mt-2">
            Configure your hiring platform.
          </p>
        </div>

        <div
          className="
          rounded-3xl
          border
          border-cyan-500/20
          bg-gradient-to-br
          from-[#0f172a]
          via-[#111827]
          to-[#0b1120]
          p-8
          shadow-2xl
          "
        >

          <div className="grid lg:grid-cols-2 gap-8">

            <div>
              <label className="block mb-2 text-gray-300">
                Platform Name
              </label>

              <input
                name="platformName"
                value={settings.platformName}
                onChange={handleChange}
                className="
                w-full
                rounded-xl
                bg-white/5
                border
                border-white/10
                p-4
                outline-none
                focus:border-cyan-400
                "
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">
                Support Email
              </label>

              <input
                name="supportEmail"
                value={settings.supportEmail}
                onChange={handleChange}
                className="
                w-full
                rounded-xl
                bg-white/5
                border
                border-white/10
                p-4
                outline-none
                focus:border-cyan-400
                "
              />
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <label className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 p-5">
              <span>Maintenance Mode</span>

              <input
                type="checkbox"
                name="maintenance"
                checked={settings.maintenance}
                onChange={handleChange}
                className="h-5 w-5"
              />
            </label>

            <label className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 p-5">
              <span>Allow Registration</span>

              <input
                type="checkbox"
                name="allowRegistration"
                checked={settings.allowRegistration}
                onChange={handleChange}
                className="h-5 w-5"
              />
            </label>

            <label className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 p-5">
              <span>Email Notifications</span>

              <input
                type="checkbox"
                name="emailNotification"
                checked={settings.emailNotification}
                onChange={handleChange}
                className="h-5 w-5"
              />
            </label>

            <label className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 p-5">
              <span>Dark Mode</span>

              <input
                type="checkbox"
                name="darkMode"
                checked={settings.darkMode}
                onChange={handleChange}
                className="h-5 w-5"
              />
            </label>

          </div>

          <div className="mt-10 flex flex-wrap gap-4">

            <button
              onClick={saveSettings}
              className="
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-8
              py-4
              font-semibold
              hover:scale-105
              transition
              "
            >
              Save Settings
            </button>

            <button
              onClick={() => localStorage.removeItem("adminSettings")}
              className="
              rounded-xl
              border
              border-red-500
              px-8
              py-4
              hover:bg-red-500
              transition
              "
            >
              Reset
            </button>

          </div>

        </div>
      </div>
    </PageTransition>
  );
}