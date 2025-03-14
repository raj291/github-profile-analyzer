import Image from 'next/image';

interface GitHubData {
  login: string;
  avatar_url: string;
  bio: string;
  followers: number;
  public_repos: number;
}

interface ProfilePageProps {
  params: {
    username: string;
  };
}

export default async function ProfilePage(props: ProfilePageProps) {
  // Destructure the username inside the function body
  const { username } = await Promise.resolve(props.params);

  // Fetch the GitHub data using the dynamic username
  const response = await fetch(`http://localhost:3002/api/github/${username}`, { cache: 'no-store' });

  if (!response.ok) {
    return <div>User not found</div>;
  }

  const data: GitHubData = await response.json();

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>{data.login}'s Profile</h1>
      <Image
        src={data.avatar_url}
        alt={data.login}
        width={200}
        height={200}
        style={{ borderRadius: '50%' }}
      />
      <p>{data.bio || 'No bio available.'}</p>
      <p>Followers: {data.followers}</p>
      <p>Public Repos: {data.public_repos}</p>
    </div>
  );
}
