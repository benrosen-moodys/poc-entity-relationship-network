import { createEntity } from "./create-entity";

const mockUuid = "b42da01c-adad-4eb2-8f57-038f8552c07d";

jest.mock("crypto", () => {
  return {
    ...jest.requireActual("crypto"),
    randomUUID: () => {
      return mockUuid;
    },
  };
});

describe("The createEntity function", function () {
  test.each([
    [
      {
        value: "foo",
        network: {
          id: "bar",
          entities: {
            byEntityId: {},
            byRelationshipId: {},
          },
          relationships: {
            byEntityId: {},
            byRelationshipId: {},
          },
        },
      },
      {
        id: "bar",
        entities: {
          byEntityId: {
            [mockUuid]: {
              id: mockUuid,
              value: "foo",
            },
          },
          byRelationshipId: {},
        },
        relationships: {
          byEntityId: {},
          byRelationshipId: {},
        },
      },
    ],
  ] as [Parameters<typeof createEntity>[0], ReturnType<typeof createEntity>][])(
    "should return the expected result",
    function (validExample, expectedResult) {
      const result = createEntity(validExample);

      expect(result).toStrictEqual(expectedResult);
    }
  );
});
