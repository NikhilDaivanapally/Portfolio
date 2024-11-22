interface TemplateProps {
  children: React.ReactNode;
  page: string;
}

export const Template: React.FC<TemplateProps> = ({ children, page }) => {
  return (
    <div id="mainpage" className="opacity-0">
      {/* text */}
      <div
        id="page"
        className=" min-h-screen text-background opacity-0 z-20 fixed text-5xl top-1/2 left-1/2 -translate-x-1/2"
      >
        {page}
      </div>
      <div
        id="banner-1"
        className="min-h-screen bg-textcolor border-textcolor z-10 fixed top-0 left-0 w-1/2 sm:w-1/4"
      />
      <div
        id="banner-2"
        className="min-h-screen bg-textcolor border-textcolor z-10 fixed top-0 left-1/2 sm:left-1/4 w-1/2 sm:w-1/4"
      ></div>
      <div
        id="banner-3"
        className="hidden sm:flex min-h-screen bg-textcolor border-textcolor z-10 fixed top-0 left-2/4 w-1/4"
      />
      <div
        id="banner-4"
        className="hidden sm:flex min-h-screen bg-textcolor border-textcolor z-10 fixed top-0 left-3/4 w-1/4"
      />
      {children}
    </div>
  );
};
