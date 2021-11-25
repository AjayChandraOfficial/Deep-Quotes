import { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
const AddQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);
  const onAddQuote = (quoteData) => {
    sendRequest(quoteData);
  };

  return <QuoteForm isLoading={status === "pending"} onAddQuote={onAddQuote} />;
};

export default AddQuote;
