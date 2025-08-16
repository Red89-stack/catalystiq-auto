import React, { useState, useEffect, useCallback } from 'react';
import { SecurityManager } from '@/lib/security';

interface SecurityStats {
  blockedIPs: string[];
  failedAttempts: Record<string, number>;
  storageUsage: number;
  lastSecurityCheck: string;
  recommendations: string[];
}

export const SecurityDashboard: React.FC = () => {
  const [securityStats, setSecurityStats] = useState<SecurityStats | null>(null);
  const [security] = useState(() => new SecurityManager());

  const loadSecurityStats = useCallback(() => {
    const audit = security.getSecurityAudit();
    setSecurityStats({
      blockedIPs: audit.blockedIPs,
      failedAttempts: audit.failedAttempts,
      storageUsage: getStorageUsagePercentage(),
      lastSecurityCheck: audit.lastSecurityCheck,
      recommendations: audit.recommendations
    });
  }, [security]);

  useEffect(() => {
    loadSecurityStats();
  }, [loadSecurityStats]);

  const getStorageUsagePercentage = (): number => {
    if (typeof window === 'undefined') return 0;
    
    let totalSize = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith('secure_chatbot_db_') || key?.startsWith('business_chatbot_')) {
        const value = localStorage.getItem(key);
        totalSize += (key.length + (value?.length || 0)) * 2; // 2 bytes per character
      }
    }
    
    return (totalSize / (5 * 1024 * 1024)) * 100; // Percentage of 5MB
  };

  const handleUnblockIP = (ip: string) => {
    security.unblockIP(ip);
    loadSecurityStats();
  };

  const handleEmergencyReset = () => {
    if (confirm('Are you sure you want to reset all security settings? This action cannot be undone.')) {
      security.emergencyReset();
      loadSecurityStats();
    }
  };

  if (!securityStats) {
    return <div>Loading security dashboard...</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Security Dashboard</h2>
      
      {/* Storage Usage */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Storage Usage</h3>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div 
            className={`h-4 rounded-full ${
              securityStats.storageUsage > 80 ? 'bg-red-500' : 
              securityStats.storageUsage > 60 ? 'bg-yellow-500' : 'bg-green-500'
            }`}
            style={{ width: `${securityStats.storageUsage}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          {securityStats.storageUsage.toFixed(1)}% of available localStorage
        </p>
      </div>

      {/* Blocked IPs */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Blocked IP Addresses ({securityStats.blockedIPs.length})</h3>
        {securityStats.blockedIPs.length > 0 ? (
          <div className="space-y-2">
            {securityStats.blockedIPs.slice(0, 10).map((ip) => (
              <div key={ip} className="flex justify-between items-center p-2 bg-red-50 rounded">
                <span className="font-mono text-sm">{ip}</span>
                <button
                  onClick={() => handleUnblockIP(ip)}
                  className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
                >
                  Unblock
                </button>
              </div>
            ))}
            {securityStats.blockedIPs.length > 10 && (
              <p className="text-sm text-gray-600">
                And {securityStats.blockedIPs.length - 10} more...
              </p>
            )}
          </div>
        ) : (
          <p className="text-gray-600">No blocked IP addresses</p>
        )}
      </div>

      {/* Failed Attempts */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Recent Failed Attempts</h3>
        {Object.keys(securityStats.failedAttempts).length > 0 ? (
          <div className="space-y-2">
            {Object.entries(securityStats.failedAttempts).map(([ip, attempts]) => (
              <div key={ip} className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                <span className="font-mono text-sm">{ip}</span>
                <span className="text-sm font-semibold text-red-600">{attempts} attempts</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No recent failed attempts</p>
        )}
      </div>

      {/* Security Recommendations */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Security Recommendations</h3>
        {securityStats.recommendations.length > 0 ? (
          <ul className="space-y-2">
            {securityStats.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-500 mr-2">⚠️</span>
                <span className="text-sm">{rec}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-green-600">✅ No security recommendations at this time</p>
        )}
      </div>

      {/* Emergency Actions */}
      <div className="border-t pt-4">
        <h3 className="text-lg font-semibold mb-2 text-red-600">Emergency Actions</h3>
        <button
          onClick={handleEmergencyReset}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Emergency Security Reset
        </button>
        <p className="text-xs text-gray-600 mt-1">
          This will clear all security data and reset to defaults
        </p>
      </div>

      {/* Last Update */}
      <div className="mt-4 text-xs text-gray-500">
        Last security check: {new Date(securityStats.lastSecurityCheck).toLocaleString()}
      </div>
    </div>
  );
};
