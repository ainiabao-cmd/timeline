import React from 'react';
import { Dynasty, Kingdom, HistoricalEvent } from '../types/timeline';
import { TimelineLine } from './TimelineLine';
import { ParallelTimelines } from './ParallelTimelines';
import { calculateTimelineHeight, getDynastyDuration } from '../utils/timelineUtils';
import { DynastyTheme } from '../styles/dynastyThemes';

interface DynastyTimelineProps {
  dynasty: Dynasty;
  theme: DynastyTheme;
  kingdoms?: Kingdom[];
  onEventClick?: (event: HistoricalEvent) => void;
  onYearChange?: (year: number) => void;
  selectedCategories: HistoricalEvent['category'][];
}

export const DynastyTimeline: React.FC<DynastyTimelineProps> = ({
  dynasty,
  kingdoms,
  onEventClick,
  onYearChange,
  selectedCategories,
}) => {
  const duration = getDynastyDuration(dynasty);
  const timelineHeight = calculateTimelineHeight(duration);

  const filteredEvents = dynasty.notableEvents.filter(event => 
    selectedCategories.length === 0 || selectedCategories.includes(event.category)
  );

  return (
    <div className="relative w-full" style={{ height: `${timelineHeight}px` }}>
      {kingdoms && kingdoms.length > 0 ? (
        <ParallelTimelines
          kingdoms={kingdoms}
          startYear={dynasty.period.start}
          endYear={dynasty.period.end}
          onEventClick={onEventClick}
          onYearChange={onYearChange}
          selectedCategories={selectedCategories}
        />
      ) : (
        <TimelineLine
          events={filteredEvents}
          startYear={dynasty.period.start}
          endYear={dynasty.period.end}
          onEventClick={onEventClick}
          onYearChange={onYearChange}
        />
      )}
    </div>
  );
};