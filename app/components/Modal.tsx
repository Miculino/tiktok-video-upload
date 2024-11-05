export default function Modal({ children }: React.PropsWithChildren) {
  return (
    <div className="bg-black/40 w-screen h-screen fixed top-0 left-0 z-50 grid place-content-center">
      {children}
    </div>
  );
}
