// src/__tests__/Event.test.js

import { render } from "@testing-library/react";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";

describe('<Event /> component', () => {
  let EventComponent;
  let allEvents;

  beforeAll(async () => {
    allEvents = await getEvents();
  })
  beforeEach(() => {
    EventComponent = render(<Event event={allEvents[0]} />);
  })

  test('renders event title', () => {
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
  });

  test('renders event location', () => {
    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
  });

  test('event details are hidden by default', () => {
    expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
  });

  test("renders event details when user clicks 'show details' button", async () => {
    const user = userEvent.setup();
    await user.click(EventComponent.queryByText('show details'));
    expect(EventComponent.container.querySelector('.details')).toBeInTheDocument();
    expect(EventComponent.queryByText('hide details')).toBeInTheDocument();
    expect(EventComponent.queryByText('show details')).not.toBeInTheDocument();
  });

  test("hides event details when user clicks 'hide details' button", async () => {
    const user = userEvent.setup();
    await user.click(EventComponent.queryByText('show details'));
    expect(EventComponent.container.querySelector('.details')).toBeInTheDocument();
    expect(EventComponent.queryByText('hide details')).toBeInTheDocument();
    expect(EventComponent.queryByText('show details')).not.toBeInTheDocument();

    await user.click(EventComponent.queryByText('hide details'));
    expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
    expect(EventComponent.queryByText('hide details')).not.toBeInTheDocument();
    expect(EventComponent.queryByText('show details')).toBeInTheDocument();
  });

});