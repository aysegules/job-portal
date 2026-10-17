import { prisma } from "../lib/prisma.ts";
import { ApplicationStatus } from "../generated/prisma/client.ts";

const applications = [
  {
    userId: "0857ba1b-cd45-46c2-8e2d-2bab4e64f63c",
    jobId: "01278351-6975-40fa-a9d7-834ea21ad8dc",
    status: ApplicationStatus.pending,
  },
  {
    userId: "0857ba1b-cd45-46c2-8e2d-2bab4e64f63c",
    jobId: "01d20551-3ecd-4034-88ed-cc2367e4ed45",
    status: ApplicationStatus.approved,
  },
  {
    userId: "0857ba1b-cd45-46c2-8e2d-2bab4e64f63c",
    jobId: "027ff10c-56a5-4f11-b25d-3ac9addec14f",
    status: ApplicationStatus.approved,
  },
  {
    userId: "0857ba1b-cd45-46c2-8e2d-2bab4e64f63c",
    jobId: "1eca893f-1e34-445e-8a45-460b4badfe00",
    status: ApplicationStatus.rejected,
  },
  {
    userId: "0857ba1b-cd45-46c2-8e2d-2bab4e64f63c",
    jobId: "239a46cb-89e6-4638-9ae0-782f4c33714a",
    status: ApplicationStatus.pending,
  },
  {
    userId: "4ea0a482-24ab-42ba-b1e3-d510531c18e8",
    jobId: "3567bcf9-88d4-4c4a-8a12-903bae027c6f",
    status: ApplicationStatus.rejected,
  },
  {
    userId: "4ea0a482-24ab-42ba-b1e3-d510531c18e8",
    jobId: "37592809-f579-403e-b786-47c37e4c5b53",
    status: ApplicationStatus.approved,
  },
  {
    userId: "4ea0a482-24ab-42ba-b1e3-d510531c18e8",
    jobId: "37c52693-2a5c-4b01-9b20-af8213e9df83",
    status: ApplicationStatus.pending,
  },
  {
    userId: "4ea0a482-24ab-42ba-b1e3-d510531c18e8",
    jobId: "24eb112e-6217-4fd2-b5cd-79809c707c8d",
    status: ApplicationStatus.pending,
  },
  {
    userId: "4ea0a482-24ab-42ba-b1e3-d510531c18e8",
    jobId: "2625340b-fa62-4f9a-8c42-19def1938c30",
    status: ApplicationStatus.approved,
  },
  {
    userId: "4ea0a482-24ab-42ba-b1e3-d510531c18e8",
    jobId: "302b1c15-5759-4718-8a83-7be7555c3b9b",
    status: ApplicationStatus.pending,
  },
  {
    userId: "4ea0a482-24ab-42ba-b1e3-d510531c18e8",
    jobId: "32a510e7-23ff-47ea-9c5f-ecaaf960e7e5",
    status: ApplicationStatus.pending,
  },
  {
    userId: "4ea0a482-24ab-42ba-b1e3-d510531c18e8",
    jobId: "397a6094-912d-4a39-9e7a-58dae3d1394f",
    status: ApplicationStatus.pending,
  },
  {
    userId: "4ea0a482-24ab-42ba-b1e3-d510531c18e8",
    jobId: "39c895f6-00c5-4a8c-bcbf-1012f02cb3e8",
    status: ApplicationStatus.approved,
  },
  {
    userId: "4ea0a482-24ab-42ba-b1e3-d510531c18e8",
    jobId: "3ac68339-c575-4574-8b73-5ee1ae5d00be",
    status: ApplicationStatus.approved,
  },
  {
    userId: "126151d1-508b-4c65-9b2b-69a68590ac88",
    jobId: "f03a2cc8-1cca-49a6-9d22-f9bc69a1e8fb",
    status: ApplicationStatus.pending,
  },
  {
    userId: "126151d1-508b-4c65-9b2b-69a68590ac88",
    jobId: "f0e55bf0-968d-445f-ba62-c4e44a42b54c",
    status: ApplicationStatus.approved,
  },
  {
    userId: "126151d1-508b-4c65-9b2b-69a68590ac88",
    jobId: "f25742a5-6f36-40e9-a412-80bcc4b81794",
    status: ApplicationStatus.rejected,
  },
  {
    userId: "126151d1-508b-4c65-9b2b-69a68590ac88",
    jobId: "f7a8bc69-33d7-4760-b0e1-9f8e3bd9eb85",
    status: ApplicationStatus.approved,
  },
  {
    userId: "126151d1-508b-4c65-9b2b-69a68590ac88",
    jobId: "f8a72f53-352c-4ac4-8884-3b2fe289ef73",
    status: ApplicationStatus.approved,
  },
  {
    userId: "126151d1-508b-4c65-9b2b-69a68590ac88",
    jobId: "fb5aa442-ae4d-4b94-a434-52936c12c70d",
    status: ApplicationStatus.pending,
  },
  {
    userId: "126151d1-508b-4c65-9b2b-69a68590ac88",
    jobId: "ff1e5d27-23ed-44b2-b180-de9cdd04d74b",
    status: ApplicationStatus.rejected,
  },
  {
    userId: "126151d1-508b-4c65-9b2b-69a68590ac88",
    jobId: "ffa8706f-96c2-450b-b426-cfeb79ed4f70",
    status: ApplicationStatus.pending,
  },
  {
    userId: "12664fbb-478a-425a-8466-d619e76e5216",
    jobId: "df341606-130f-4b56-b293-3317f08e7dea",
    status: ApplicationStatus.approved,
  },
  {
    userId: "12664fbb-478a-425a-8466-d619e76e5216",
    jobId: "e08f332f-ea35-46ac-93b6-1b5d2528b623",
    status: ApplicationStatus.pending,
  },
  {
    userId: "12664fbb-478a-425a-8466-d619e76e5216",
    jobId: "e371b564-0158-4d7b-a722-db62d02debe1",
    status: ApplicationStatus.rejected,
  },
  {
    userId: "12664fbb-478a-425a-8466-d619e76e5216",
    jobId: "e88aac2c-0da2-4088-b920-9b354aca308d",
    status: ApplicationStatus.pending,
  },
  {
    userId: "12664fbb-478a-425a-8466-d619e76e5216",
    jobId: "f011554c-95c5-4cab-ba7c-605f19f42e68",
    status: ApplicationStatus.approved,
  },
  {
    userId: "12664fbb-478a-425a-8466-d619e76e5216",
    jobId: "f03a2cc8-1cca-49a6-9d22-f9bc69a1e8fb",
    status: ApplicationStatus.approved,
  },
  {
    userId: "12664fbb-478a-425a-8466-d619e76e5216",
    jobId: "f0e55bf0-968d-445f-ba62-c4e44a42b54c",
    status: ApplicationStatus.pending,
  },
  {
    userId: "12664fbb-478a-425a-8466-d619e76e5216",
    jobId: "f25742a5-6f36-40e9-a412-80bcc4b81794",
    status: ApplicationStatus.pending,
  },
  {
    userId: "12664fbb-478a-425a-8466-d619e76e5216",
    jobId: "f7a8bc69-33d7-4760-b0e1-9f8e3bd9eb85",
    status: ApplicationStatus.rejected,
  },
  {
    userId: "12664fbb-478a-425a-8466-d619e76e5216",
    jobId: "f8a72f53-352c-4ac4-8884-3b2fe289ef73",
    status: ApplicationStatus.pending,
  },
  {
    userId: "12664fbb-478a-425a-8466-d619e76e5216",
    jobId: "fb5aa442-ae4d-4b94-a434-52936c12c70d",
    status: ApplicationStatus.pending,
  },
  {
    userId: "12664fbb-478a-425a-8466-d619e76e5216",
    jobId: "ff1e5d27-23ed-44b2-b180-de9cdd04d74b",
    status: ApplicationStatus.pending,
  },
  {
    userId: "12664fbb-478a-425a-8466-d619e76e5216",
    jobId: "ffa8706f-96c2-450b-b426-cfeb79ed4f70",
    status: ApplicationStatus.pending,
  },
];

const main = async () => {
  console.log("Seeding application data...");

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
