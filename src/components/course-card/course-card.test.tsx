import React from 'react';
import { render, screen } from '@testing-library/react';
import { CourseCard } from './course-card';
import '@testing-library/jest-dom'

describe('CourseCard component', () => {
  const defaultProps = {
    id: "352be3c6-848b-4c19-9e7d-54fe68fef183",
    title: "Lack of Motivation & How to Overcome It",
    lessonsCount: 5,
    previewImageLink: "https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it",
    rating: 3.5,
    skills: [
      "Aligning your goals with your motives",
      "Overcoming decision paralysis",
      "Reframing negative self-talk",
      "Gaining clarity",
      "Challenging yourself"
    ],
    courseVideoPreview: {
      link: "https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8",
      duration: 27,
      previewImageLink: "https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it/preview"
    }
  };

  it('renders all properties correctly', () => {
    render(<CourseCard {...defaultProps} />);

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.rating)).toBeInTheDocument();
    expect(screen.getByText(`Lessons: ${defaultProps.lessonsCount}`)).toBeInTheDocument();
    expect(screen.getByAltText('preview image')).toHaveAttribute('src', `${defaultProps.previewImageLink}/cover.webp`);

    expect(screen.getByText(defaultProps.skills[0])).toBeInTheDocument();
    expect(screen.getByText(defaultProps.skills[1])).toBeInTheDocument();
    expect(screen.getByText(defaultProps.skills[2])).toBeInTheDocument();
    expect(screen.getByText(defaultProps.skills[3])).toBeInTheDocument();
    expect(screen.getByText(defaultProps.skills[4])).toBeInTheDocument();
  });
});