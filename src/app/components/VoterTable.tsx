// Component for the Voter Deadline Table, sortable by State, Deadlines, and Election Day Registration
"use client";

import {
  Box, Input, Flex, 
  Table, Thead, Tbody, Tr, Th, Td
} from "@chakra-ui/react";
import { useState } from "react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";

type VoterDeadline = {
  State: string;
  DeadlineInPerson: string;
  DeadlineByMail: string;
  DeadlineOnline: string;
  ElectionDayRegistration: string;
};

// Expect Voter Deadline as prop
type Props = {
  initialData: VoterDeadline[];
};

export default function VoterTable({ initialData }: Props) {
  //Set initial states for table
  const [data, setData] = useState<VoterDeadline[]>(initialData);
  const [filter, setFilter] = useState("");
  const [sortKey, setSortKey] = useState<keyof VoterDeadline>("State");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  //User searches for a specific state in textbox.
  const filteredData = data.filter((row) =>
    row.State.toLowerCase().includes(filter.toLowerCase())
  );


  //Sort given data by State Name by default
  const sortedData = [...filteredData].sort((a, b) => {
    const valA = a[sortKey] || "";
    const valB = b[sortKey] || "";
    if (valA < valB) return sortOrder === "asc" ? -1 : 1;
    if (valA > valB) return sortOrder === "asc" ? 1 : -1;
  });

  //Toggle table sorting based off user-input (State name by default)
  const onSort = (key: keyof VoterDeadline) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

return (
  <Box overflowX="auto" px={[2, 4, 6]}> 
    {/* px= [2,4,6] => [8px,16px,24px] for mobile, tablet, and desktop respectively */}

    {/* Textbox for searching for specific states */}
    <Input
      placeholder="Filter by state..."
      mb={4}
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      maxW="300px"
    />

    {/* Table */}
    <Box overflowX="auto" width="100%">
      <Table variant="striped" size="sm" minWidth="800px">
        <Thead>
          <Tr>
            {[
              { label: "State", key: "State" },
              { label: "In-Person Deadline", key: "DeadlineInPerson" },
              { label: "By Mail Deadline", key: "DeadlineByMail" },
              { label: "Online Deadline", key: "DeadlineOnline" },
              { label: "Election Day Registration", key: "ElectionDayRegistration" },
            ].map(({ label, key }) => (
              <Th
                key={key}
                onClick={() => onSort(key as keyof VoterDeadline)}
                cursor="pointer"
                userSelect="none"
                whiteSpace="nowrap"
              >
                <Flex align="center" justify="space-between">
                  {label}
                  {/* Show sort icon if this column is active sort key */}
                  {sortKey === key &&
                    (sortOrder === "asc" ? <TriangleUpIcon ml={2} /> : <TriangleDownIcon ml={2} />)}
                </Flex>
              </Th>
            ))}
          </Tr>
        </Thead>

        {/* Add data rows */}
        <Tbody>
          {sortedData.map((row) => (
            <Tr key={row.State}>
              <Td whiteSpace="nowrap">{row.State}</Td>
              <Td whiteSpace="nowrap">{row.DeadlineInPerson}</Td>
              <Td whiteSpace="nowrap">{row.DeadlineByMail}</Td>
              <Td whiteSpace="nowrap">{row.DeadlineOnline}</Td>
              <Td whiteSpace="nowrap">{row.ElectionDayRegistration}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  </Box>
);
}