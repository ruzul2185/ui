interface PageProps {
  params: { slug: string };
}

const ComponentPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      Components: {slug}
    </div>
  );
};

export default ComponentPage;
