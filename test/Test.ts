import assert from "assert";
import { 
  TestHelpers,
  Governor_AdminChanged
} from "generated";
const { MockDb, Governor } = TestHelpers;

describe("Governor contract AdminChanged event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Governor contract AdminChanged event
  const event = Governor.AdminChanged.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Governor_AdminChanged is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Governor.AdminChanged.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualGovernorAdminChanged = mockDbUpdated.entities.Governor_AdminChanged.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedGovernorAdminChanged: Governor_AdminChanged = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      previousAdmin: event.params.previousAdmin,
      newAdmin: event.params.newAdmin,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualGovernorAdminChanged, expectedGovernorAdminChanged, "Actual GovernorAdminChanged should be the same as the expectedGovernorAdminChanged");
  });
});
