export default function ChatBotNavigator(props) {
  return (
    <div
      onClick={() => props.handleClick(true)}
      className="fixed bottom-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 shado-sm"
    >
      <MessageSquareIcon className="w-10 h-10 text-gray-500" />
    </div>
  );
}

function MessageSquareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
