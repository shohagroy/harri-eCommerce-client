import Footer from "@/shared/Footer/Footer";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const PrivateRouteHOC = (WrappedComponent) => {
  const PrivateRoute = (props) => {
    const router = useRouter();
    const { user, isLoading } = useSelector((state) => state.auth);

    const isAuthenticated = user?.email;

    useEffect(() => {
      // Redirect to login page if user is not authenticated
      if (!isAuthenticated && !isLoading) {
        router.push("/login");
      }
    }, [isAuthenticated, isLoading, router]);

    if (isLoading) {
      return (
        <div className="h-screen flex justify-center items-center">
          <div className="text-center text-4xl">
            <h2>Loading...</h2>
          </div>
        </div>
      );
    }

    // Render the component if user is authenticated, otherwise null
    return (
      <>
        isAuthenticated && <WrappedComponent {...props} />
        <Footer />
      </>
    );
  };

  return PrivateRoute;
};

export default PrivateRouteHOC;
