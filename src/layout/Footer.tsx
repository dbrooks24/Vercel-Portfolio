
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
      <div className="flex w-full text-white justify-center bg-black py-2">
        <div className="container text-center mx-auto">
          <p>Technologies Used:</p>
            <div className="flex justify-center mt-1">
              { techUsed.map((item) => (              
                  <div
                    key={item}
                    className="mx-1"
                  >
                    {item}
                  </div>
                ))}
            </div>
          </div>
      </div>
    </>
  );
}
