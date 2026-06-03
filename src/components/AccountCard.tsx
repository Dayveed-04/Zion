import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface AccountCardProps {
  title: string;
  accountNo: string;
  bankName: string;
}

const AccountCard = ({ title, accountNo, bankName }: AccountCardProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (accountNo: string) => {
    try {
      await navigator.clipboard.writeText(accountNo);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="bg-red-100 p-4 sm:pb-6 pb-16 sm:pb-32">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
        {title}
      </h3>
      <div className="space-y-2 sm:space-y-3">
        <p className="text-sm text-gray-700 flex items-center gap-2">
          <span className="font-semibold">Account No: </span>
          <span>{accountNo}</span>
          <button
            onClick={() => copyToClipboard(accountNo)}
            className="text-black hover:text-gray-600 transition-colors duration-200"
            title="Copy account number"
          >
            {copied ? (
              <Check size={16} className="text-green-500" />
            ) : (
              <Copy size={16} />
            )}
          </button>
        </p>
        <p className="text-xs sm:text-sm text-gray-700">
          <span className="font-semibold">Bank Name: </span>
          {bankName}
        </p>
      </div>
    </div>
  );
};

export default AccountCard;
