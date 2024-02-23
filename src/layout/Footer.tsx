
export default function Footer() {
  // return a dynamic navbar that has a mobile view (Disclosure button) when below specific pixel count
  const techUsed = [
    'Next.js',
    'TypeScript',
    'TailWinds',
    'Vercel',
    'SendGrid'
  ]
  return (
    <>
      <div className="fixed bottom-0 flex w-full text-sm text-white justify-center bg-black py-1">
        <div className="container text-center mx-auto">
            <div className="flex justify-center">
              Technologies used: 
              {techUsed.map((item) => (              
                  <div key={item} className="mx-1">
                    {item}
                  </div>
                ))}
            </div>
          </div>
      </div>
    </>
  );
}
