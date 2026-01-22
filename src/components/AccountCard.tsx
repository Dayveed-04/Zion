interface AccountCardProps {
  title: string;
  accountNo: string;
  bankName: string;
}

const AccountCard = ({ title, accountNo, bankName }: AccountCardProps) => {
  return (
    <div className="bg-red-100  p-4 sm:pb-6  pb-16 sm:pb-32">
      <h3 className=" text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">{title}</h3>
      <div className="space-y-2 sm:space-y-3">
        <p className="text-sm sm:text-sm text-gray-700">
          <span className="font-semibold">Account No: </span>
          {accountNo}
        </p>
        <p className="text-xs sm:text-sm text-gray-700 ">
          <span className="font-semibold">Bank Name: </span>
          {bankName}
        </p>
      </div>
    </div>
  );
};

export default AccountCard;