"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Eye, Search, Play, Pause, X, Calendar, Filter } from "lucide-react";

// Activity type definitions
type BaseActivity = {
  id: number;
  time: string;
  date: string;
  timestamp: number;
};

type EntryActivity = BaseActivity & {
  type: "entry";
  person: string;
  action: string;
  location: string;
};

type SecurityActivity = BaseActivity & {
  type: "security";
  title: string;
  description: string;
};

type AlertActivity = BaseActivity & {
  type: "alert";
  title: string;
  description: string;
};

type Activity = EntryActivity | SecurityActivity | AlertActivity;

// Time period for filtering
type TimePeriod = "today" | "week" | "month" | "all";

export default function Dashboard() {
  const [isLive, setIsLive] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("today");

  const people = [
    { name: "Violet", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Brian", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Sara", image: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "David", image: "https://randomuser.me/api/portraits/men/22.jpg" },
    { name: "Davis", image: "https://randomuser.me/api/portraits/men/91.jpg" },
  ];

  // Generate a large set of activities over various dates
  const allActivities: Activity[] = useMemo(() => {
    const now = new Date();
    const activities: Activity[] = [];
    const personNames = [
      "Phoenix Baker",
      "Candice Wu",
      "Lana Steiner",
      "Demi Wilkinson",
      "Orlando Diggs",
      "Drew Cano",
      "Kate Morrison",
      "Andi Lane",
      "Tanner Harris",
      "Blake Reid",
    ];
    const locations = ["Front Door", "Back Door", "Garage", "Side Entrance", "Patio"];
    const alertTitles = [
      "Movement at Artwork",
      "Motion Detected",
      "Unknown Person",
      "Unusual Activity",
      "Sound Detected",
    ];
    const securityTitles = [
      "Security Check",
      "Perimeter Check",
      "System Test",
      "Camera Maintenance",
      "Sensor Calibration",
    ];
    
    // Generate 80 activities spread over the last month
    for (let i = 0; i < 80; i++) {
      const timestamp = now.getTime() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000);
      const date = new Date(timestamp);
      const dateStr = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? "pm" : "am";
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const timeStr = `${formattedHours}:${formattedMinutes} ${ampm}`;
      
      const activityType = Math.random() < 0.6 ? "entry" : Math.random() < 0.8 ? "security" : "alert";
      
      if (activityType === "entry") {
        activities.push({
          id: i + 1,
          type: "entry",
          person: personNames[Math.floor(Math.random() * personNames.length)],
          time: timeStr,
          date: dateStr,
          timestamp,
          action: "Verified and entered through the",
          location: locations[Math.floor(Math.random() * locations.length)],
        });
      } else if (activityType === "security") {
        activities.push({
          id: i + 1,
          type: "security",
          title: securityTitles[Math.floor(Math.random() * securityTitles.length)],
          time: timeStr,
          date: dateStr,
          timestamp,
          description: "Guards performed security check",
        });
      } else {
        activities.push({
          id: i + 1,
          type: "alert",
          title: alertTitles[Math.floor(Math.random() * alertTitles.length)],
          time: timeStr,
          date: dateStr,
          timestamp,
          description: "Deterrence light was activated",
        });
      }
    }

    // Sort by timestamp, newest first
    return activities.sort((a, b) => b.timestamp - a.timestamp);
  }, []);

  // Apply filters to activities
  const filteredActivities = useMemo(() => {
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const weekStart = todayStart - (6 * 24 * 60 * 60 * 1000); // 7 days ago
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).getTime();

    let filtered = allActivities;

    // Apply time period filter
    if (timePeriod === "today") {
      filtered = filtered.filter(activity => activity.timestamp >= todayStart);
    } else if (timePeriod === "week") {
      filtered = filtered.filter(activity => activity.timestamp >= weekStart);
    } else if (timePeriod === "month") {
      filtered = filtered.filter(activity => activity.timestamp >= monthStart);
    }

    // Apply search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(activity => {
        if (activity.type === "entry") {
          return (
            activity.person.toLowerCase().includes(query) ||
            activity.location.toLowerCase().includes(query)
          );
        } else {
          return (
            activity.title.toLowerCase().includes(query) ||
            activity.description.toLowerCase().includes(query)
          );
        }
      });
    }

    return filtered;
  }, [allActivities, timePeriod, searchQuery]);

  // Group activities by date for display
  const groupedActivities = useMemo(() => {
    const groups: { [key: string]: Activity[] } = {};
    
    filteredActivities.forEach(activity => {
      if (!groups[activity.date]) {
        groups[activity.date] = [];
      }
      groups[activity.date].push(activity);
    });
    
    return groups;
  }, [filteredActivities]);

  return (
    <div className="dashboard">
      {/* Left Panel */}
      <div className="dashboard-sidebar">
        {/* User Info */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src="https://randomuser.me/api/portraits/men/74.jpg"
              alt="Ocean Estate"
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-neutral-800">Ocean Estate</h2>
          </div>
          <button className="ml-auto bg-neutral-200 hover:bg-neutral-400 text-sm text-neutral-700 py-2 px-4 rounded-full transition">
            Manage Access
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 h-5 w-5 text-neutral-500" />
          <input
            type="text"
            placeholder="Search Activity"
            className="w-full bg-neutral-200 border-0 rounded-full py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Time Period Filter */}
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <Calendar className="h-5 w-5 text-neutral-600 mr-2" />
            <h3 className="text-base font-medium text-neutral-700">Filter by Period</h3>
          </div>
          <div className="flex space-x-2">
            {["today", "week", "month", "all"].map((period) => (
              <button
                key={period}
                className={`px-4 py-2 rounded-full text-sm ${
                  timePeriod === period
                    ? "bg-neutral-800 text-white"
                    : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
                }`}
                onClick={() => setTimePeriod(period as TimePeriod)}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* People on Property */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-neutral-800">6 People on Property</h3>
            <button className="text-neutral-600 hover:text-neutral-800 text-sm">View All</button>
          </div>
          <div className="flex space-x-6">
            {people.map((person, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-2 relative">
                  {index === 2 && (
                    <div className="absolute inset-0 bg-blue-500/30 border-4 border-blue-500 rounded-full"></div>
                  )}
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm text-neutral-800">{person.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Activity */}
        <div className="flex-1 overflow-auto pr-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-neutral-800">
              {timePeriod === "today" 
                ? "Today's Activity" 
                : timePeriod === "week" 
                  ? "This Week's Activity" 
                  : timePeriod === "month" 
                    ? "This Month's Activity" 
                    : "All Activity"
              }
            </h3>
            <span className="text-sm text-neutral-500">{filteredActivities.length} events</span>
          </div>

          <div className="space-y-6">
            {Object.keys(groupedActivities).length > 0 ? (
              Object.entries(groupedActivities).map(([date, activities]) => (
                <div key={date} className="space-y-4">
                  <h4 className="text-sm font-medium text-neutral-500 sticky top-0 bg-neutral-300 py-2">
                    {date === new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }).replace(/\//g, '/') 
                      ? 'Today' 
                      : date
                    }
                  </h4>
                  <div className="space-y-5">
                    {activities.map((activity) => (
                      <div key={activity.id} className="activity-item">
                        {activity.type === "entry" ? (
                          <div>
                            <div className="activity-header">
                              <div className="activity-icon bg-green-100">
                                <div className="absolute inset-0.5 bg-green-400 rounded-full"></div>
                                <Image
                                  src={`https://randomuser.me/api/portraits/${
                                    activity.person.includes("Phoenix") || 
                                    activity.person.includes("Orlando") || 
                                    activity.person.includes("Drew") || 
                                    activity.person.includes("Tanner") ||
                                    activity.person.includes("Blake")
                                      ? "men" 
                                      : "women"
                                  }/${Math.floor(Math.random() * 70) + 1}.jpg`}
                                  alt={activity.person}
                                  width={32}
                                  height={32}
                                  className="rounded-full"
                                />
                              </div>
                              <h4 className="text-base font-medium">{activity.person}</h4>
                              <span className="text-sm text-neutral-500 ml-auto">{activity.time}</span>
                            </div>
                            <p className="activity-content">
                              {activity.action}{" "}
                              <span className="font-medium">{activity.location}</span>
                            </p>
                            <button className="review-button">
                              <Eye className="h-4 w-4" /> Review
                            </button>
                          </div>
                        ) : activity.type === "security" ? (
                          <div>
                            <div className="activity-header">
                              <div className="activity-icon bg-green-100 flex items-center justify-center">
                                <Eye className="h-5 w-5 text-green-600" />
                              </div>
                              <h4 className="text-base font-medium">{activity.title}</h4>
                              <span className="text-sm text-neutral-500 ml-auto">{activity.time}</span>
                            </div>
                            <p className="activity-content">{activity.description}</p>
                          </div>
                        ) : (
                          <div>
                            <div className="activity-header">
                              <div className="activity-icon bg-amber-100 flex items-center justify-center">
                                <div className="h-4 w-4 bg-amber-400 rounded-full"></div>
                              </div>
                              <h4 className="text-base font-medium">{activity.title}</h4>
                              <span className="text-sm text-neutral-500 ml-auto">{activity.time}</span>
                            </div>
                            <p className="activity-content">{activity.description}</p>
                            <button className="review-button">
                              <Eye className="h-4 w-4" /> Review
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="py-4 text-center text-neutral-500">
                No activities found for this period
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-main bg-neutral-600">
        {/* SAURON Logo */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10">
          <h1 className="text-2xl font-light tracking-widest text-neutral-200">SAURON</h1>
        </div>

        {/* Home 3D Model - Using a simple 3D-like visualization instead of hero image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-900"></div>
            
            {/* 3D House Representation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-4/5 h-4/5 perspective-1000">
                {/* Main house structure */}
                <div className="absolute w-3/4 h-2/3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg transform rotate-y-10 translate-z-20 left-20 top-20"></div>
                <div className="absolute w-1/4 h-1/2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg transform rotate-y-10 translate-z-10 right-40 top-10"></div>
                <div className="absolute w-1/3 h-1/3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg transform rotate-y-10 translate-z-30 left-40 bottom-20"></div>
              </div>
            </div>
            
            {/* Hotspots */}
            <div className="absolute top-1/4 right-1/4">
              <div className="hotspot">
                <div className="hotspot-inner hotspot-ping"></div>
              </div>
            </div>
            <div className="absolute top-1/3 left-1/3">
              <div className="hotspot">
                <div className="hotspot-inner hotspot-ping"></div>
              </div>
            </div>
            <div className="absolute bottom-1/4 right-1/3">
              <div className="hotspot">
                <div className="hotspot-inner hotspot-ping"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Floor Plan */}
        <div className="absolute top-6 right-6 w-64 h-48 bg-neutral-100/80 backdrop-blur-sm rounded-2xl p-3">
          <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-white/50 flex items-center justify-center rounded-xl">
              <svg viewBox="0 0 200 150" className="w-full h-full text-neutral-400 p-3">
                <rect x="20" y="20" width="160" height="110" stroke="currentColor" strokeWidth="2" fill="none" />
                <rect x="20" y="20" width="60" height="50" stroke="currentColor" strokeWidth="2" fill="none" />
                <rect x="80" y="20" width="50" height="50" stroke="currentColor" strokeWidth="2" fill="none" />
                <rect x="130" y="20" width="50" height="110" stroke="currentColor" strokeWidth="2" fill="none" />
                <rect x="20" y="70" width="110" height="60" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
            {/* Floor plan dots */}
            <div className="absolute top-1/4 left-1/4">
              <div className="floorplan-dot"></div>
            </div>
            <div className="absolute bottom-1/3 right-1/4">
              <div className="floorplan-dot"></div>
            </div>
            <div className="absolute top-2/3 left-1/2">
              <div className="floorplan-dot"></div>
            </div>
            <div className="absolute top-1/2 right-1/3">
              <div className="floorplan-dot"></div>
            </div>
          </div>
        </div>

        {/* Temperature */}
        <div className="absolute bottom-6 right-6 text-white text-xl font-light">
          72°
        </div>

        {/* Video Controls */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-neutral-800/50 backdrop-blur-sm rounded-full py-2 px-8 flex items-center gap-4">
          <button className="text-neutral-400 hover:text-white">
            <Play className="h-5 w-5" />
          </button>
          <div className="video-timeline">
            <div className="video-segment left-0 w-2/12 bg-green-500"></div>
            <div className="video-segment left-[30%] w-1/5 bg-red-500"></div>
            <div className="video-segment right-1/4 w-1/6 bg-red-500"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isLive ? "bg-red-500" : "bg-neutral-400"}`}></div>
            <span className="text-white text-xs font-medium">LIVE</span>
          </div>
          <button className="text-neutral-400 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
} 