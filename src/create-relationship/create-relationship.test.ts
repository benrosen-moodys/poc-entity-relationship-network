import { createRelationship } from "./create-relationship";

const mockUuid = "b42da01c-adad-4eb2-8f57-038f8552c07d";

jest.mock("crypto", () => {
  return {
    ...jest.requireActual("crypto"),
    randomUUID: () => {
      return mockUuid;
    },
  };
});

describe("The createRelationship function", function () {
  test.each([
    [
      {
        firstEntityId: "ca425033-440f-4bd2-91e4-b8efa79b85e7",
        secondEntityId: "53fe26b1-1128-4077-a276-741cd6474c2a",
        network: {
          id: "6346ed98-c194-423d-a16e-4a462b8aecbd",
          entities: {
            byEntityId: {
              ["ca425033-440f-4bd2-91e4-b8efa79b85e7"]: {
                id: "ca425033-440f-4bd2-91e4-b8efa79b85e7",
                value: "foo",
              },
              ["53fe26b1-1128-4077-a276-741cd6474c2a"]: {
                id: "53fe26b1-1128-4077-a276-741cd6474c2a",
                value: "bar",
              },
            },
            byRelationshipId: {},
          },
          relationships: {
            byEntityId: {},
            byRelationshipId: {},
          },
        },
      },
      {
        id: "6346ed98-c194-423d-a16e-4a462b8aecbd",
        entities: {
          byEntityId: {
            ["ca425033-440f-4bd2-91e4-b8efa79b85e7"]: {
              id: "ca425033-440f-4bd2-91e4-b8efa79b85e7",
              value: "foo",
            },
            ["53fe26b1-1128-4077-a276-741cd6474c2a"]: {
              id: "53fe26b1-1128-4077-a276-741cd6474c2a",
              value: "bar",
            },
          },
          byRelationshipId: {
            [mockUuid]: [
              "ca425033-440f-4bd2-91e4-b8efa79b85e7",
              "53fe26b1-1128-4077-a276-741cd6474c2a",
            ],
          },
        },
        relationships: {
          byEntityId: {
            ["ca425033-440f-4bd2-91e4-b8efa79b85e7"]: [mockUuid],
            ["53fe26b1-1128-4077-a276-741cd6474c2a"]: [mockUuid],
          },
          byRelationshipId: {
            [mockUuid]: {
              id: mockUuid,
              firstEntityId: "ca425033-440f-4bd2-91e4-b8efa79b85e7",
              secondEntityId: "53fe26b1-1128-4077-a276-741cd6474c2a",
            },
          },
        },
      },
    ],
  ] as [Parameters<typeof createRelationship>[0], ReturnType<typeof createRelationship>][])(
    "should return the expected result",
    function (validExample, expectedResult) {
      const result = createRelationship(validExample);

      expect(result).toStrictEqual(expectedResult);
    }
  );
});
