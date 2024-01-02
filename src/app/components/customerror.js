import Error from 'next/error';

function CustomErrorPage() {
  return (
    <>
    <Error statusCode={404} />
    <h1>It error.</h1>
    </>
  );
}

export default CustomErrorPage;