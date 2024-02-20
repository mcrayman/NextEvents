import useRouter from 'next/router';

import { getEventId } from '../../dummy-data';

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventId(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <div>
      <h1>Event Detail Page</h1>
    </div>
  );
}

export default EventDetailPage;