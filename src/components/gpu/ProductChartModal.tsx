import { Button, Flex, VStack } from "@chakra-ui/react";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Modal from "react-modal";
import { PriceHistory } from "../../pages/gpu";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Histórico de Preço",
    },
  },
};

interface IProductModal {
  title: string;
  priceHistory: PriceHistory[];
  isOpen: boolean;
  onRequestClose: () => void;
  openModal: (index: any) => void;
}

export default function ProductChart({
  title,
  priceHistory,
  isOpen,
  onRequestClose,
}: IProductModal) {
  let labels: string[] = [];
  let prices: number[] = [];

  const ordered = priceHistory.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateA > dateB ? 1 : -1;
  });

  ordered.map((product) => {
    labels.push(
      new Date(product.date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    );
    prices.push(product.price);
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: `${title.substring(0, 55) + "..."}`,
        data: prices,
        fill: {
          target: "origin",
          above: "#e2e2e2", // Area will be red above the origin
          below: "rgb(255, 0, 0)", // And blue below the origin
        },
      },
    ],
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          zIndex: 999,
          maxHeight: "600px",
          maxWidth: "800px",
          top: "20%",
          left: "30%",
        },
      }}
    >
      <VStack>
        <Flex width={"100%"}>
          <Button onClick={onRequestClose} alignSelf={"end"} />
        </Flex>
        <Line options={options} data={data} />
      </VStack>
    </Modal>
  );
}
