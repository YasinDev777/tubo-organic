import { useEffect, useState } from "react";
import { getDate } from "../utils/GetDate";

const DueDateDisplay = ({ due_date, id }) => {
  const [dateText, setDateText] = useState('');

  useEffect(() => {
    const loadDate = async () => {
      try {
        const result = await getDate(due_date, id);
        setDateText(result);
      } catch (err) {
        setDateText('Muddati kutilmoqda');
      }
    };

    loadDate();
  }, [due_date, id]);

  return dateText;
};
export default DueDateDisplay
