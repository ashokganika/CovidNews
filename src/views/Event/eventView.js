import React from "react";
import SecondaryScreenHead from "../../component/secondaryScreenHead";
import Colors from "../../utils/colors";
import eventIcon from "../../assets/images/event.svg";
import EventOrganizerIcon from "../../assets/images/ekantipur.jpg";
import EventItem from "./eventItem";

export default function EventView() {
  return (
    <section className="event">
      <SecondaryScreenHead
        title="Event"
        subTitle="Upcomming events list"
        color={Colors.blue}
        icon={eventIcon}
      />
      <div className="wrap">
        <EventItem
          icon={EventOrganizerIcon}
          organizer="Alibaba"
          time="5 days from now"
          title="Discount sales and marketing strategy meeting by board"
        />
        <EventItem
          icon={EventOrganizerIcon}
          organizer="Alibaba"
          time="5 days from now"
          title="Discount sales and marketing strategy meeting by board"
        />
        <EventItem
          icon={EventOrganizerIcon}
          organizer="Alibaba"
          time="5 days from now"
          title="Discount sales and marketing strategy meeting by board"
        />
        <EventItem
          icon={EventOrganizerIcon}
          organizer="Alibaba"
          time="5 days from now"
          title="Discount sales and marketing strategy meeting by board"
        />
      </div>
    </section>
  );
}
