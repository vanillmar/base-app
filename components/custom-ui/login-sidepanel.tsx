import Image from 'next/image'

export default function LoginSidePanel() {
  return (
    <>
      <Image
        src="/images/logo.png"
        alt="Welcome to our application"
        width={600}
        height={600}
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold text-white">
          Welcome to {process.env.NEXT_PUBLIC_APP_NAME}
        </h1>
      </div>
    </>
  )
}
