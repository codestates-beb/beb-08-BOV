import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 커스텀 컴포넌트 정의
export default function ScrollReset ({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};