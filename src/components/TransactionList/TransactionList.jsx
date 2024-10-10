import { useEffect, useState } from "react";
import ExpenseForm from "../Forms/ExpenseForm/ExpenseForm";
import TransactionCard from "../TransactionCard/TransactionCard";
import Modal from "../Modal/Modal";
import Pagination from "../Pagination/Pagination";

const TransactionList = ({
  expenseList,
  setExpenseList,
  balance,
  setBalance,
}) => {
  const [editId, setEditId] = useState(0);
  const [isDisplayEditor, setIsDisplayEditor] = useState(false);
  const [currentTransactions, setCurrentTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const maxItems = 3;

  const handleDelete = (id) => {
    const item = expenseList.find((i) => i.id === id);
    const price = Number(item.price);
    setBalance((prev) => prev + price);

    setExpenseList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    setEditId(id);
    setIsDisplayEditor(true);
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * maxItems;
    const endIndex = Math.min(currentPage * maxItems, expenseList.length);

    setCurrentTransactions([...expenseList].slice(startIndex, endIndex));
    setTotalPages(Math.ceil(expenseList.length / maxItems));
  }, [currentPage, expenseList]);

  useEffect(() => {
    if (totalPages < currentPage && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [totalPages]);

  return (
    <div>
      {expenseList.length > 0 ? (
        <div>
          {currentTransactions.map((transaction) => (
            <TransactionCard
              details={transaction}
              key={transaction.id}
              handleDelete={() => handleDelete(transaction.id)}
              handleEdit={() => handleEdit(transaction.id)}
            />
          ))}

          {totalPages > 1 && (
            <Pagination
              updatePage={setCurrentPage}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          )}
        </div>
      ) : (
        <div>
          <p>No expenseList!</p>
        </div>
      )}

      <Modal isOpen={isDisplayEditor} setIsOpen={setIsDisplayEditor}>
        <ExpenseForm
          editId={editId}
          expenseList={expenseList}
          setExpenseList={setExpenseList}
          setIsOpen={setIsDisplayEditor}
          balance={balance}
          setBalance={setBalance}
        />
      </Modal>
    </div>
  );
};

export default TransactionList;
