import { prisma } from "../lib/prisma.ts";
import { ApplicationStatus } from "../generated/prisma/client.ts";

const applications = [
  {
    userId: "023e987e-6488-4f6a-a394-71985ed2ade2",
    jobId: "01a3572a-10ba-4523-b647-96e17ab17be8",
    status: ApplicationStatus.pending,
  },
  {
    userId: "023e987e-6488-4f6a-a394-71985ed2ade2",
    jobId: "061919ab-061d-48fe-9245-100ef8bf684e",
    status: ApplicationStatus.approved,
  },
  {
    userId: "023e987e-6488-4f6a-a394-71985ed2ade2",
    jobId: "1bf54853-f4bf-4cd8-ad42-bcc7f10938eb",
    status: ApplicationStatus.approved,
  },
  {
    userId: "023e987e-6488-4f6a-a394-71985ed2ade2",
    jobId: "1ce0bb2f-3929-4986-8fdf-8fc933f5c0de",
    status: ApplicationStatus.rejected,
  },
  {
    userId: "023e987e-6488-4f6a-a394-71985ed2ade2",
    jobId: "21321cc0-4998-4695-8ab8-020bb70301fa",
    status: ApplicationStatus.pending,
  },
  {
    userId: "0a155cfd-a984-46bc-a455-9b113944f1e2",
    jobId: "21f3ee54-cabd-43a8-b3ae-af24af46d428",
    status: ApplicationStatus.rejected,
  },
  {
    userId: "0a155cfd-a984-46bc-a455-9b113944f1e2",
    jobId: "2918e14e-7d26-4933-b571-1dd84aae8c8f",
    status: ApplicationStatus.approved,
  },
  {
    userId: "0a155cfd-a984-46bc-a455-9b113944f1e2",
    jobId: "30c0764b-57a4-4711-a900-9c4e687ee91d",
    status: ApplicationStatus.pending,
  },
  {
    userId: "0a155cfd-a984-46bc-a455-9b113944f1e2",
    jobId: "32ce87fb-71be-4edf-88a3-cd8f45eff931",
    status: ApplicationStatus.pending,
  },
  {
    userId: "0a155cfd-a984-46bc-a455-9b113944f1e2",
    jobId: "3384944f-690a-45a7-802d-bc4631c42745",
    status: ApplicationStatus.approved,
  },
  {
    userId: "0a155cfd-a984-46bc-a455-9b113944f1e2",
    jobId: "35babae7-142e-4eb9-9c79-d2b1e43a0d1b",
    status: ApplicationStatus.pending,
  },
  {
    userId: "0a155cfd-a984-46bc-a455-9b113944f1e2",
    jobId: "37f90685-403e-43a6-bf2a-be377fa2e23a",
    status: ApplicationStatus.pending,
  },
  {
    userId: "0a155cfd-a984-46bc-a455-9b113944f1e2",
    jobId: "3902603b-238f-4303-bb5c-4608662018a7",
    status: ApplicationStatus.pending,
  },
  {
    userId: "0a155cfd-a984-46bc-a455-9b113944f1e2",
    jobId: "3beac950-c76c-4f77-a2a3-91359619e418",
    status: ApplicationStatus.approved,
  },
  {
    userId: "0a155cfd-a984-46bc-a455-9b113944f1e2",
    jobId: "44f18ee8-6049-46e8-a33e-32d91702839f",
    status: ApplicationStatus.approved,
  },
  {
    userId: "165b0aa3-0995-4dc3-a476-6b6ba770bd8d",
    jobId: "4857821f-ae26-4aae-b739-a90f8387a8a0",
    status: ApplicationStatus.pending,
  },
  {
    userId: "165b0aa3-0995-4dc3-a476-6b6ba770bd8d",
    jobId: "499a963b-4c2d-464d-a205-264b4d9c852e",
    status: ApplicationStatus.approved,
  },
  {
    userId: "165b0aa3-0995-4dc3-a476-6b6ba770bd8d",
    jobId: "53577643-1acc-4883-80a0-2a8c2ff3a176",
    status: ApplicationStatus.rejected,
  },
  {
    userId: "165b0aa3-0995-4dc3-a476-6b6ba770bd8d",
    jobId: "57fcd608-7b0c-44be-90f6-b00e8b850af6",
    status: ApplicationStatus.approved,
  },
  {
    userId: "165b0aa3-0995-4dc3-a476-6b6ba770bd8d",
    jobId: "5a57f03e-1dcc-413f-88c7-cf8d5ea9aa7d",
    status: ApplicationStatus.approved,
  },
  {
    userId: "165b0aa3-0995-4dc3-a476-6b6ba770bd8d",
    jobId: "63a90bf7-3fba-47be-80af-87f2e567c7b3",
    status: ApplicationStatus.pending,
  },
  {
    userId: "165b0aa3-0995-4dc3-a476-6b6ba770bd8d",
    jobId: "67c33801-35d1-4b1c-b12a-130cc434ce19",
    status: ApplicationStatus.rejected,
  },
  {
    userId: "165b0aa3-0995-4dc3-a476-6b6ba770bd8d",
    jobId: "68649883-dd7a-4bb4-8715-d188b0ddfd33",
    status: ApplicationStatus.pending,
  },
  {
    userId: "1bee1d93-31a1-4338-bb50-475538c45f83",
    jobId: "6defb1db-c919-4d6e-b2dc-c4a77ddcab5a",
    status: ApplicationStatus.approved,
  },
  {
    userId: "1bee1d93-31a1-4338-bb50-475538c45f83",
    jobId: "6ea1c993-eb62-410f-9e63-28ff11c128d3",
    status: ApplicationStatus.pending,
  },
  {
    userId: "1bee1d93-31a1-4338-bb50-475538c45f83",
    jobId: "71d7f4fe-3121-4e55-9481-ab789b6cc31e",
    status: ApplicationStatus.rejected,
  },
  {
    userId: "1bee1d93-31a1-4338-bb50-475538c45f83",
    jobId: "75c29774-f8e9-40d0-88bd-4f3fdadd907e",
    status: ApplicationStatus.pending,
  },
  {
    userId: "1bee1d93-31a1-4338-bb50-475538c45f83",
    jobId: "7a210450-35a8-49e1-9c28-b56c4dda44f4",
    status: ApplicationStatus.approved,
  },
  {
    userId: "1bee1d93-31a1-4338-bb50-475538c45f83",
    jobId: "7fa168f6-19f3-4608-a6e5-47c26cd17c81",
    status: ApplicationStatus.approved,
  },
  {
    userId: "1bee1d93-31a1-4338-bb50-475538c45f83",
    jobId: "8173467d-4da5-4c6f-831d-b214a1c3602f",
    status: ApplicationStatus.pending,
  },
  {
    userId: "1bee1d93-31a1-4338-bb50-475538c45f83",
    jobId: "85ed5d96-9d90-44e8-b4a7-4c4d4a5a6c4a",
    status: ApplicationStatus.pending,
  },
  {
    userId: "1bee1d93-31a1-4338-bb50-475538c45f83",
    jobId: "87b3a179-53e8-4737-b80b-c52bdbced4b6",
    status: ApplicationStatus.rejected,
  },
  {
    userId: "1bee1d93-31a1-4338-bb50-475538c45f83",
    jobId: "8e6425c5-fb31-4f11-ab06-efd87ba1fbef",
    status: ApplicationStatus.pending,
  },
  {
    userId: "1bee1d93-31a1-4338-bb50-475538c45f83",
    jobId: "8efd633e-bac0-4372-bd6f-8cd30341243b",
    status: ApplicationStatus.pending,
  },
  {
    userId: "1bee1d93-31a1-4338-bb50-475538c45f83",
    jobId: "91396ee1-ea21-4f08-a5b6-36716ec4d2b3",
    status: ApplicationStatus.pending,
  },
  {
    userId: "1bee1d93-31a1-4338-bb50-475538c45f83",
    jobId: "92b97641-320e-4e4d-85d3-e44af3a3a0cb",
    status: ApplicationStatus.pending,
  },
];

const main = async () => {
  console.log("Seeding application data...");

  await prisma.jobApplication.deleteMany();

  for (const application of applications) {
    await prisma.jobApplication.create({
      data: application,
    });

    console.log(`Created application ${application}`);
  }

  console.log("Seeding completed!");
};

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
