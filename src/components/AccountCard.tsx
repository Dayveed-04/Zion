interface AccountCardProps {
  title: string;
  accountNo: string;
  bankName: string;
}

const AccountCard = ({ title, accountNo, bankName }: AccountCardProps) => {
  return (
    <div className="bg-red-100  p-6 pb-32 ">
      <h3 className="text-xl font-bold text-gray-900 mb-6">{title}</h3>
      <div className="space-y-3">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Account No: </span>
          {accountNo}
        </p>
        <p className="text-sm text-gray-700 mb-13">
          <span className="font-semibold">Bank Name: </span>
          {bankName}
        </p>
      </div>
    </div>
  );
};

export default AccountCard;