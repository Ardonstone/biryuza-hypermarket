import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Перемещаем скролл в самые координаты 0,0
  }, [pathname]); // Срабатывает каждый раз, когда меняется адрес страницы

  return null; // Компонент ничего не рисует на экране
}
