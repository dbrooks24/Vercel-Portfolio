
export default function Footer() {
  // return a dynamic navbar that has a mobile view (Disclosure button) when below specific pixel count
  const techUsed = [
    'Next.js',
    'TypeScript',
    'TailWinds',
    'Vercel'
  ]
  return (
    <>
      <div className="fixed bottom-0 flex w-full text-sm text-white justify-center bg-black py-1">
        <div className="container text-center mx-auto">
            <div className="flex justify-center">
              Built With: &nbsp;
              {techUsed.map((item, index) => (
                <span key={item}>
                  {item}
                  {index < techUsed.length - 1 ? ", " : ""}
                </span>
              ))}
            </div>
          </div>
      </div>
    </>
  );
}
