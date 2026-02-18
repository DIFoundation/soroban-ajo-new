// Issue #29: Add transaction history display
// Complexity: Medium (150 pts)
// Status: Placeholder

import React from 'react'

interface Transaction {
  id: string
  type: 'contribution' | 'payout' | 'refund'
  amount: number
  date: string
  member: string
  status: 'completed' | 'pending' | 'failed'
}

interface TransactionHistoryProps {
  groupId: string
  transactions: Transaction[]
}

export const TransactionHistory: React.FC<TransactionHistoryProps> = ({
  groupId,
  transactions,
}) => {
  // TODO: Fetch real transaction history from contract
  // TODO: Add pagination
  // TODO: Add filters (type, status, date)

  const mockTransactions: Transaction[] = [
    {
      id: 'tx-1',
      type: 'contribution',
      amount: 500,
      date: '2026-02-10',
      member: 'GAAAA...AAAA',
      status: 'completed',
    },
    {
      id: 'tx-2',
      type: 'contribution',
      amount: 500,
      date: '2026-02-11',
      member: 'GBBBB...BBBB',
      status: 'completed',
    },
    {
      id: 'tx-3',
      type: 'payout',
      amount: 4000,
      date: '2026-02-12',
      member: 'GCCCC...CCCC',
      status: 'completed',
    },
  ]

  const displayTransactions = transactions.length > 0 ? transactions : mockTransactions

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold">Transaction History</h3>
        <button className="text-blue-600 hover:text-blue-700 font-semibold">
          Export
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold">Type</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Amount</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Date</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Member</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {displayTransactions.map((tx) => (
              <tr key={tx.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3 text-sm capitalize">{tx.type}</td>
                <td className="px-4 py-3 text-sm font-semibold">${tx.amount}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{tx.date}</td>
                <td className="px-4 py-3 text-sm font-mono text-gray-600">
                  {tx.member}
                </td>
                <td className="px-4 py-3 text-sm">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      tx.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : tx.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Group ID: {groupId} • {displayTransactions.length} transactions
      </p>
    </div>
  )
}
