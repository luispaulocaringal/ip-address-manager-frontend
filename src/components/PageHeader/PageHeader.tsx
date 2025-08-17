function PageHeader({ header, subHeader } : { header: string; subHeader: string }) {
  return (
    <header className="page-header mb-3">
      <h1>{header}</h1>
      <p>{subHeader}</p>
    </header>
  );
}

export default PageHeader;