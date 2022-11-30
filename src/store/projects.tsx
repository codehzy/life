import { BiCarousel } from 'react-icons/bi';
import { CgCodeSlash, CgNotes, CgWebsite } from 'react-icons/cg';
import { GiSelect } from 'react-icons/gi';
import { GrTemplate } from 'react-icons/gr';
import { IoAccessibilitySharp } from 'react-icons/io5';
import { atom } from 'recoil';

export const projectsAtom = atom({
  key: 'PROJECTS_ATOM',
  default: [
    {
      category: 'front-around',
      child: [
        {
          title: 'monorepo',
          description:
            '一个monorepo的小demo，配合https://www.codehzy.cn/blog/04_quick-monorepo博文进行学习',
          link: 'https://github.com/codehzy/monorepo',
          icon: <IoAccessibilitySharp />,
        },
      ],
    },
  ],
});
