import { Fragment } from "react";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { getSingleQuote } from "../lib/api";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

const QuoteDetail = () => {
  const { quoteID } = useParams();

  const {
    error,
    status,
    data: loadedQuote,
    sendRequest,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteID);
  }, [sendRequest, quoteID]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focus">An error occured</p>;
  }
  if (!loadedQuote.text) {
    return <p className="centered focus">No quote found</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote
        id={quoteID}
        text={loadedQuote.text}
        author={loadedQuote.author}
      />
    </Fragment>
  );
};

export default QuoteDetail;
